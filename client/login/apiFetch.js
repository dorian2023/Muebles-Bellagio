export const loginUser = async (token) => {
  const userLoggedSuccess = await fetch('https://inventario-mb.onrender.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const user = await userLoggedSuccess.json();
  return user;
}