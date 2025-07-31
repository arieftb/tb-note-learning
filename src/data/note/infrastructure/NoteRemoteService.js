const BASE_URL = 'https://notes-api.dicoding.dev/v1';

async function get (url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });
}

async function fetchCollection (token) {
  const response = await get(`${BASE_URL}/notes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function fetchById (id, token) {
  const response = await get(`${BASE_URL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function deleteNote (id, token) {
  const response = await get(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addNote ({ title, body }, token) {
  const response = await get(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, body }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function archiveNote (id, token) {
  const response = await get(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function fetchArchivedCollection (token) {
  const response = await get(`${BASE_URL}/notes/archived`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function unarchiveNote (id, token) {
  const response = await get(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export { fetchCollection, fetchById, deleteNote, addNote, archiveNote, fetchArchivedCollection, unarchiveNote };