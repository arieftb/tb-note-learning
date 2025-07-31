const BASE_URL = 'https://notes-api.dicoding.dev/v1';

async function register ({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: responseJson.message };
  }

  return { error: false };
}

async function login ({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: responseJson.message, data: null };
  }

  return { error: false, data: { accessToken: responseJson.data.accessToken } };
}

async function fetchUser (token) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
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

export { register, login, fetchUser };
