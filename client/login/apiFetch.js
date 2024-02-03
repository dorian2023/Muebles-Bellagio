export const loginUser = async (token) => {
  //const userLoggedSuccess = await fetch('https://inventario-mb.onrender.com/api/v1/login'
  const userLoggedSuccess = await fetch('http://localhost:4000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const user = await userLoggedSuccess.json();
  return user;
}