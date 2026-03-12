export type SaveState = 'idle' | 'saving' | 'saved' | 'error';

interface Props { state: SaveState; onSave: () => void; }

const CONFIG: Record<SaveState, { icon: string; label: string; cls: string }> = {
  idle:   { icon: '↓',  label: 'Save',        cls: '' },
  saving: { icon: '…',  label: 'Saving…',     cls: 'saving' },
  saved:  { icon: '✓',  label: 'Saved',        cls: 'saved' },
  error:  { icon: '!',  label: 'Save failed',  cls: 'error' },
};

export default function SaveStatus({ state, onSave }: Props) {
  const cfg = CONFIG[state];
  return (
    <button
      className={`save-status-btn ${cfg.cls}`}
      onClick={onSave}
      disabled={state === 'saving'}
      title={state === 'error' ? 'Click to retry' : 'Save your schedule'}
    >
      <span className={`save-icon ${state === 'saving' ? 'spin' : ''}`}>{cfg.icon}</span>
      {cfg.label}
    </button>
  );
}
