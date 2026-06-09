/**
 * Merge server and local records by id. Prefer the record with the newer updatedAt;
 * if only one side has the record, keep it.
 */
export function mergeById(localItems = [], serverItems = [], idKey = 'id') {
  const map = new Map();

  localItems.forEach((item) => {
    const id = item?.[idKey];
    if (id != null) map.set(id, item);
  });

  serverItems.forEach((item) => {
    const id = item?.[idKey];
    if (id == null) return;
    const existing = map.get(id);
    if (!existing) {
      map.set(id, item);
      return;
    }
    const existingTime = Date.parse(existing.updatedAt || existing.createdAt || 0) || 0;
    const incomingTime = Date.parse(item.updatedAt || item.createdAt || 0) || 0;
    map.set(id, incomingTime >= existingTime ? item : existing);
  });

  return Array.from(map.values());
}

export function mergeProfilesById(localProfiles = [], serverProfiles = []) {
  return mergeById(localProfiles, serverProfiles, 'profileId');
}

export function mergeTestsMasterById(localTests = [], serverTests = []) {
  return mergeById(localTests, serverTests, 'testId');
}

/**
 * Never replace local profiles/tests with an empty server response.
 */
export function safeMergeArray(localItems, serverItems, mergeFn) {
  const local = Array.isArray(localItems) ? localItems : [];
  const server = Array.isArray(serverItems) ? serverItems : [];

  if (server.length === 0 && local.length > 0) {
    return { merged: local, skippedEmptyServer: true };
  }

  if (server.length === 0) {
    return { merged: local, skippedEmptyServer: false };
  }

  return { merged: mergeFn(local, server), skippedEmptyServer: false };
}
