import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { REPORT_TEST_TEMPLATES } from '../../data/urineTemplates';
import './UrineTemplatePicker.css';

const UrineTemplatePicker = ({
  onApply,
  activeTestLabel = '',
  className = ''
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return REPORT_TEST_TEMPLATES;
    return REPORT_TEST_TEMPLATES.filter(
      (t) =>
        t.label.toLowerCase().includes(q) ||
        t.displayName.toLowerCase().includes(q) ||
        t.sectionName.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <aside className={`urine-template-picker ${className}`.trim()} aria-label="Urine templates">
      <div className="urine-template-picker-head">
        <strong>Urine / microscopy templates</strong>
        <p>
          {activeTestLabel
            ? `Apply to: ${activeTestLabel}`
            : 'Expand a test row first, then click a template'}
        </p>
      </div>
      <div className="urine-template-picker-search">
        <Search size={16} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search all templates…"
          aria-label="Search urine templates"
        />
      </div>
      <div className="urine-template-picker-list">
        {filtered.length === 0 ? (
          <div className="urine-template-picker-empty">No templates match</div>
        ) : (
          filtered.map((template) => (
            <button
              key={template.label}
              type="button"
              className="urine-template-picker-item"
              onClick={() => onApply?.(template)}
            >
              <span className="urine-template-picker-label">{template.label}</span>
              <span className="urine-template-picker-section">{template.sectionName}</span>
            </button>
          ))
        )}
      </div>
    </aside>
  );
};

export default UrineTemplatePicker;
