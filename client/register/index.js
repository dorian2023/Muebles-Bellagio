const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalText = document.getElementById("modalText");
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
} 

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   }
}

function showModal(message) {
  modalText.innerText = message;
  modal.style.display = "block";
}

const form = document.getElementById('signup');

const registerUser = async (user) => {
    try {
        const createUser = await fetch('http://localhost:4000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        // if (!createUser.ok) {
        //     throw new Error('Error al crear el usuario');
        // }
        const createdUser = await createUser.json();
        showModal('USUARIO CREADO SATISFACTORIAMENTE');
        return createdUser;
    } catch (error) {
        showModal(error.message);
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const displayName = event.target.displayName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const user = {username, displayName, email, password};
    registerUser(user)
    .then(() => window.location.pathname = '/')
    .catch(err => console.log(err))
})