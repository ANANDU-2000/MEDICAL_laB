import { getProfiles } from '../shared/dataService';

export function collectCatalogTests() {
  const profiles = getProfiles();
  const map = new Map();
  profiles.forEach((p) => {
    (p.tests || []).forEach((t) => {
      const name = (t.name || t.description || '').trim();
      const unit = (t.unit || '').trim();
      const key = `${name}|${unit}|${(t.bioReference || '').slice(0, 40)}`;
      if (name && !map.has(key)) {
        map.set(key, {
          ...t,
          _sourceProfile: p.name
        });
      }
    });
  });
  return Array.from(map.values());
}

export function filterCatalogTests(catalogTests, query, limitWhenEmpty = 12) {
  const q = query.trim().toLowerCase();
  if (!q) return catalogTests.slice(0, limitWhenEmpty);
  return catalogTests.filter(
    (t) =>
      (t.name || t.description || '').toLowerCase().includes(q) ||
      (t.unit || '').toLowerCase().includes(q) ||
      (t._sourceProfile || '').toLowerCase().includes(q)
  );
}
