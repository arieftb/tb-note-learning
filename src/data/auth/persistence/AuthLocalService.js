async function saveToken (
  token
) {
  localStorage.setItem('token', token);
}

async function getToken () {
  return localStorage.getItem('token');
}

export {
  saveToken,
  getToken
};