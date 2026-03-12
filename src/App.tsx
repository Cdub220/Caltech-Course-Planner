import { useState, useMemo } from 'react';
import type { Course, Schedule, Term } from './types';
import { MAJORS, MINORS } from './data/majorRequirements';
import CourseSearch from './components/CourseSearch';
import ScheduleGrid from './components/ScheduleGrid';
import CoreRequirementsPanel from './components/CoreRequirementsPanel';
import MajorRequirementsPanel from './components/MajorRequirementsPanel';
import './App.css';

const YEARS = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

function emptySchedule(): Schedule {
  const s: Schedule = {};
  for (const y of YEARS) {
    s[y] = { FA: [], WI: [], SP: [] };
  }
  return s;
}

export default function App() {
  const [schedule, setSchedule] = useState<Schedule>(emptySchedule());
  const [selectedMajorId, setSelectedMajorId] = useState('');
  const [selectedMinorId, setSelectedMinorId] = useState('');
  const [showCore, setShowCore] = useState(false);
  const [showMajor, setShowMajor] = useState(false);
  const [showMinor, setShowMinor] = useState(false);
  const [highlightedCourses, setHighlightedCourses] = useState<Set<string>>(new Set());

  const scheduledCourseIds = useMemo(() => {
    const ids = new Set<string>();
    for (const terms of Object.values(schedule)) {
      for (const courseIds of Object.values(terms)) {
        for (const id of courseIds) ids.add(id);
      }
    }
    return ids;
  }, [schedule]);

  const handleAddCourse = (course: Course, year: string, term: Term) => {
    setSchedule(prev => {
      const updated = { ...prev };
      const yearTerms = { ...updated[year] };
      const termCourses = [...(yearTerms[term] ?? [])];
      if (!termCourses.includes(course.id)) {
        termCourses.push(course.id);
      }
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

  const selectedMajor = MAJORS.find(m => m.id === selectedMajorId);
  const selectedMinor = MINORS.find(m => m.id === selectedMinorId);

  return (
    <div className="app">
      {/* ── TOP BAR ─────────────────────────────────── */}
      <header className="topbar">
        <div className="topbar-left">
          <span className="topbar-logo">🧪</span>
          <h1 className="topbar-title">Caltech Course Planner</h1>
        </div>

        <div className="topbar-controls">
          {/* Major selector */}
          <div className="selector-group">
            <label className="selector-label">Major</label>
            <select
              className="selector-select"
              value={selectedMajorId}
              onChange={e => {
                setSelectedMajorId(e.target.value);
                setShowMajor(false);
              }}
            >
              <option value="">— Select major —</option>
              {MAJORS.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name} ({m.abbreviation})
                </option>
              ))}
            </select>
            {selectedMajorId && (
              <button
                className="view-req-btn"
                onClick={() => setShowMajor(true)}
              >
                View Requirements
              </button>
            )}
          </div>

          {/* Minor selector */}
          <div className="selector-group">
            <label className="selector-label">Minor</label>
            <select
              className="selector-select"
              value={selectedMinorId}
              onChange={e => {
                setSelectedMinorId(e.target.value);
                setShowMinor(false);
              }}
            >
              <option value="">— Select minor —</option>
              {MINORS.map(m => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
            {selectedMinorId && (
              <button
                className="view-req-btn"
                onClick={() => setShowMinor(true)}
              >
                View Requirements
              </button>
            )}
          </div>

          <button
            className="core-req-btn"
            onClick={() => setShowCore(true)}
          >
            Core Requirements
          </button>
        </div>
      </header>

      {/* ── MAIN LAYOUT ─────────────────────────────── */}
      <div className="main-layout">
        <CourseSearch
          onAddCourse={handleAddCourse}
          scheduledCourseIds={scheduledCourseIds}
        />

        <main className="schedule-main">
          <ScheduleGrid
            schedule={schedule}
            onRemoveCourse={handleRemoveCourse}
            highlightedCourses={highlightedCourses}
          />
        </main>
      </div>

      {/* ── PANELS ──────────────────────────────────── */}
      {showCore && (
        <CoreRequirementsPanel
          schedule={schedule}
          onClose={() => setShowCore(false)}
        />
      )}

      {showMajor && selectedMajor && (
        <MajorRequirementsPanel
          major={selectedMajor}
          schedule={schedule}
          onClose={() => { setShowMajor(false); setHighlightedCourses(new Set()); }}
          onHighlightCourses={setHighlightedCourses}
        />
      )}

      {showMinor && selectedMinor && (
        <MajorRequirementsPanel
          major={selectedMinor}
          schedule={schedule}
          onClose={() => { setShowMinor(false); setHighlightedCourses(new Set()); }}
          onHighlightCourses={setHighlightedCourses}
        />
      )}
    </div>
  );
}
