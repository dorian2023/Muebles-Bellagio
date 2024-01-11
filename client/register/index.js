window.onload = function () {
    const registerUser = async (user) => {
        try {
            const createUser = await fetch('http://localhost:3100/users', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (!createUser.ok) {
                throw new Error('Error al crear el usuario');
            }
            const createdUser = await createUser.json();
            showModal('USUARIO CREADO SATISFACTORIAMENTE');
            return createdUser;
        } catch (error) {
            showModal(error.message);
        }
    }
    
    const form = document.getElementById('signup');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const username = event.target.username.value;
        const fullName = event.target.fullname.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    
        const user = {username, fullName, email, password};
        await registerUser(user);
    })
    
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
}






// {}||   [] <>