import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import type { Course, Schedule, Term } from './types';
import { MAJORS, MINORS } from './data/majorRequirements';
import { useAuth } from './hooks/useAuth';
import { saveSchedule, loadSchedule } from './lib/db';
import CourseSearch from './components/CourseSearch';
import ScheduleGrid from './components/ScheduleGrid';
import CoreRequirementsPanel from './components/CoreRequirementsPanel';
import MajorRequirementsPanel from './components/MajorRequirementsPanel';
import AuthModal from './components/AuthModal';
import CustomCourseModal from './components/CustomCourseModal';
import SaveStatus, { type SaveState } from './components/SaveStatus';
import './App.css';

const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

export interface DragPayload {
  courseId: string;
  fromYear?: string;
  fromTerm?: Term;
}

function emptySchedule(): Schedule {
  const s: Schedule = {};
  for (const y of YEARS) s[y] = { FA: [], WI: [], SP: [] };
  return s;
}

export default function App() {
  const auth = useAuth();

  const [schedule, setSchedule] = useState<Schedule>(emptySchedule());
  const [customCourses, setCustomCourses] = useState<Course[]>([]);
  const [selectedMajorId, setSelectedMajorId] = useState('');
  const [selectedMinorId, setSelectedMinorId] = useState('');
  const [showCore, setShowCore] = useState(false);
  const [showMajor, setShowMajor] = useState(false);
  const [showMinor, setShowMinor] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [highlightedCourses, setHighlightedCourses] = useState<Set<string>>(new Set());
  const [dragPayload, setDragPayload] = useState<DragPayload | null>(null);
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [scheduleId, setScheduleId] = useState<string | undefined>();

  // ── Load schedule when user logs in ──────────────────────────────
  useEffect(() => {
    if (auth.status !== 'authed' || !auth.user) return;
    loadSchedule(auth.user.id).then(result => {
      if (!result.ok || !result.data) return;
      const { schedule, customCourses: cc, major_id, minor_id, id } = result.data;
      setSchedule(schedule);
      setCustomCourses(cc);
      setSelectedMajorId(major_id ?? '');
      setSelectedMinorId(minor_id ?? '');
      setScheduleId(id);
    });
  }, [auth.status, auth.user]);

  // Reset when user logs out
  useEffect(() => {
    if (auth.status === 'anon') {
      setSchedule(emptySchedule());
      setCustomCourses([]);
      setSelectedMajorId('');
      setSelectedMinorId('');
      setScheduleId(undefined);
      setSaveState('idle');
    }
  }, [auth.status]);

  // ── Auto-save (debounced 2s after any change) ─────────────────────
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);

  const triggerSave = useCallback(
    (sched: Schedule, cc: Course[], majorId: string, minorId: string, sid: string | undefined) => {
      if (!auth.user) return;
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
      setSaveState('saving');
      saveTimerRef.current = setTimeout(async () => {
        const result = await saveSchedule(auth.user!.id, sched, cc, majorId, minorId, sid);
        if (result.ok) {
          setScheduleId(result.id);
          setSaveState('saved');
          setTimeout(() => setSaveState('idle'), 2500);
        } else {
          setSaveState('error');
        }
      }, 2000);
    },
    [auth.user]
  );

  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    if (auth.status !== 'authed') return;
    triggerSave(schedule, customCourses, selectedMajorId, selectedMinorId, scheduleId);
  }, [schedule, customCourses, selectedMajorId, selectedMinorId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleManualSave = () => {
    if (!auth.user) { setShowAuth(true); return; }
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    setSaveState('saving');
    saveSchedule(auth.user.id, schedule, customCourses, selectedMajorId, selectedMinorId, scheduleId).then(result => {
      if (result.ok) {
        setScheduleId(result.id);
        setSaveState('saved');
        setTimeout(() => setSaveState('idle'), 2500);
      } else {
        setSaveState('error');
      }
    });
  };

  // ── Schedule mutations ────────────────────────────────────────────
  const scheduledCourseIds = useMemo(() => {
    const ids = new Set<string>();
    for (const terms of Object.values(schedule))
      for (const courseIds of Object.values(terms))
        for (const id of courseIds) ids.add(id);
    return ids;
  }, [schedule]);

  const handleAddCourse = (course: Course, year: string, term: Term) => {
    setSchedule(prev => {
      const updated = { ...prev };
      const yearTerms = { ...updated[year] };
      const termCourses = [...(yearTerms[term] ?? [])];
      if (!termCourses.includes(course.id)) termCourses.push(course.id);
      yearTerms[term] = termCourses;
      updated[year] = yearTerms;
      return updated;
    });
  };

  const handleRemoveCourse = (year: string, term: Term, courseId: string) => {
    setSchedule(prev => {
      const updated = { ...prev };
      const yearTerms = { ...updated[year] };
      yearTerms[term] = (yearTerms[term] ?? []).filter(id => id !== courseId);
      updated[year] = yearTerms;
      return updated;
    });
  };

  const handleDrop = (toYear: string, toTerm: Term, payload: DragPayload) => {
    const { courseId, fromYear, fromTerm } = payload;
    setSchedule(prev => {
      const updated: Schedule = {};
      for (const y of YEARS) {
        updated[y] = {};
        for (const t of ['FA', 'WI', 'SP'] as Term[])
          updated[y][t] = [...(prev[y]?.[t] ?? [])];
      }
      if (fromYear && fromTerm)
        updated[fromYear][fromTerm] = updated[fromYear][fromTerm].filter(id => id !== courseId);
      if (!updated[toYear][toTerm].includes(courseId))
        updated[toYear][toTerm] = [...updated[toYear][toTerm], courseId];
      return updated;
    });
  };

  const handleAddCustomCourse = (course: Course) => {
    setCustomCourses(prev => [...prev, course]);
  };

  const handleRemoveCustomCourse = (id: string) => {
    setCustomCourses(prev => prev.filter(c => c.id !== id));
  };

  const selectedMajor = MAJORS.find(m => m.id === selectedMajorId);
  const selectedMinor = MINORS.find(m => m.id === selectedMinorId);

  return (
    <div className="app">
      {/* ── TOP BAR ───────────────────────────────────────── */}
      <header className="topbar">
        <div className="topbar-left">
          <div className="topbar-brand">
            <img src="/beaver.png" className="topbar-logo-img" alt="Caltech Planner" />
            <div>
              <h1 className="topbar-title">Caltech Course Planner</h1>
              <span className="topbar-sub">4-Year Schedule Builder</span>
              <span className="topbar-credit">Created by Chase Williamson '28</span>
            </div>
          </div>
        </div>

        <div className="topbar-controls">
          <div className="selector-group">
            <label className="selector-label">Major</label>
            <select
              className="selector-select"
              value={selectedMajorId}
              onChange={e => { setSelectedMajorId(e.target.value); setShowMajor(false); }}
            >
              <option value="">— Select major —</option>
              {MAJORS.map(m => <option key={m.id} value={m.id}>{m.name} ({m.abbreviation})</option>)}
            </select>
            {selectedMajorId && (
              <button className="view-req-btn" onClick={() => setShowMajor(true)}>Requirements</button>
            )}
          </div>

          <div className="selector-group">
            <label className="selector-label">Minor</label>
            <select
              className="selector-select"
              value={selectedMinorId}
              onChange={e => { setSelectedMinorId(e.target.value); setShowMinor(false); }}
            >
              <option value="">— Select minor —</option>
              {MINORS.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
            </select>
            {selectedMinorId && (
              <button className="view-req-btn" onClick={() => setShowMinor(true)}>Requirements</button>
            )}
          </div>

          <button className="core-req-btn" onClick={() => setShowCore(true)}>
            Core Requirements
          </button>

          {/* Auth / Save controls */}
          {auth.status === 'authed' ? (
            <div className="topbar-user-area">
              <SaveStatus state={saveState} onSave={handleManualSave} />
              <div className="user-pill">
                <span className="user-avatar">{auth.user?.email?.[0].toUpperCase()}</span>
                <span className="user-email">{auth.user?.email}</span>
                <button className="signout-btn" onClick={auth.signOut} title="Sign out">Sign out</button>
              </div>
            </div>
          ) : auth.status === 'anon' ? (
            <button className="login-btn" onClick={() => setShowAuth(true)}>
              Log in to save
            </button>
          ) : null /* loading */}
        </div>
      </header>

      {/* ── MAIN ──────────────────────────────────────────── */}
      <div className="main-layout">
        <CourseSearch
          onAddCourse={handleAddCourse}
          scheduledCourseIds={scheduledCourseIds}
          onDragStart={setDragPayload}
          onDragEnd={() => setDragPayload(null)}
          customCourses={customCourses}
          onOpenCustomModal={() => setShowCustomModal(true)}
          onRemoveCustomCourse={handleRemoveCustomCourse}
        />
        <main className="schedule-main">
          <ScheduleGrid
            schedule={schedule}
            onRemoveCourse={handleRemoveCourse}
            onDrop={handleDrop}
            highlightedCourses={highlightedCourses}
            dragPayload={dragPayload}
            onDragStart={setDragPayload}
            onDragEnd={() => setDragPayload(null)}
            customCourses={customCourses}
          />
        </main>
      </div>

      {/* ── OVERLAYS ──────────────────────────────────────── */}
      {showCore && <CoreRequirementsPanel schedule={schedule} onClose={() => setShowCore(false)} />}
      {showMajor && selectedMajor && (
        <MajorRequirementsPanel
          major={selectedMajor} schedule={schedule}
          onClose={() => { setShowMajor(false); setHighlightedCourses(new Set()); }}
          onHighlightCourses={setHighlightedCourses}
        />
      )}
      {showMinor && selectedMinor && (
        <MajorRequirementsPanel
          major={selectedMinor} schedule={schedule}
          onClose={() => { setShowMinor(false); setHighlightedCourses(new Set()); }}
          onHighlightCourses={setHighlightedCourses}
        />
      )}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} actions={auth} />}
      {showCustomModal && <CustomCourseModal onClose={() => setShowCustomModal(false)} onAdd={handleAddCustomCourse} />}
    </div>
  );
}
