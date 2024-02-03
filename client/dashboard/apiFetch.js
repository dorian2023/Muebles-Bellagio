// const getTokenOnSessionStorage = window.sessionStorage.getItem('firebase:authUser:AIzaSyDsfYNiaY3ttExmHMTLFx3mB3-z4va5kds:[DEFAULT]');

// const getToken = JSON.parse(getTokenOnSessionStorage);

// const token = getToken.stsTokenManager.accessToken;

export const getUserFromEmail = async (email) => {
  const getUserEmail = await fetch(`http://localhost:4000/api/v1/users?email=${email}`);
  const dataResult = await getUserEmail.json();
  return dataResult;

}