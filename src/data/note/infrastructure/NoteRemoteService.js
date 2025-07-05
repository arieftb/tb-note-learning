const BASE_URL = 'https://notes-api.dicoding.dev/v1';

async function fetchCollection (token) {
  return fetch(`${BASE_URL}/notes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export { fetchCollection };