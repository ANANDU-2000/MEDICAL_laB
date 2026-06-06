import { useMemo, useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { collectCatalogTests, filterCatalogTests } from '../../features/profile-manager/catalogUtils';
import './CatalogSidebar.css';

const CatalogSidebar = ({ onAddTest, catalogVersion = 0, className = '' }) => {
  const [query, setQuery] = useState('');

  const catalogTests = useMemo(
    () => collectCatalogTests(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [catalogVersion]
  );

  const filtered = useMemo(
    () => filterCatalogTests(catalogTests, query, query.trim() ? 50 : 20),
    [catalogTests, query]
  );

  return (
    <aside className={`catalog-sidebar ${className}`.trim()} aria-label="Test catalog">
      <div className="catalog-sidebar-head">
        <strong>Add from catalog</strong>
        <p>Search tests from other profiles and add with +</p>
      </div>
      <div className="catalog-sidebar-search">
        <Search size={16} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or unit…"
          aria-label="Search catalog tests"
        />
      </div>
      <div className="catalog-sidebar-list">
        {filtered.length === 0 ? (
          <div className="catalog-sidebar-empty">No matches</div>
        ) : (
          filtered.map((t) => (
            <div key={`${t.name}_${t.unit}_${t._sourceProfile}`} className="catalog-sidebar-row">
              <div className="catalog-sidebar-row-text">
                <div className="catalog-sidebar-row-name">{t.name || t.description}</div>
                <div className="catalog-sidebar-row-meta">
                  {t.unit || '—'} · from {t._sourceProfile}
                </div>
              </div>
              <button
                type="button"
                className="catalog-sidebar-add"
                title={`Add ${t.name || t.description}`}
                onClick={() => onAddTest?.(t)}
              >
                <Plus size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default CatalogSidebar;
