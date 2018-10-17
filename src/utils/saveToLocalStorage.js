

const saveUserInLocalStorage = (response) => {
  localStorage.setItem('rmwUser', JSON.stringify(response.data.user));
  localStorage.setItem('token', JSON.stringify(response.data.token));
  return true;
}

export default saveUserInLocalStorage;