const form = document.getElementById('signup');
const titleProduct = document.getElementById('titulo');
const descriptionProduct = document.getElementById('descripcion');
const priceProduct = document.getElementById('precio');
const imageProduct = document.getElementById('Imagen');
// const btnAdd = document.getElementById('btnAdd');

const clientID = "f00bc3fa8e97aea";
console.log(clientID);

const saveANewProduct = async (product) => {

    const productData = await fetch ('https://inventario-mb.onrender.com/api/v1/products', {
        method: 'POST',
        headers: { 
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(product),
    });
    const newProduct = await productData.json();
    console.log(newProduct);
    return newProduct;
}

// form.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     //METODO PARA ENVIAR IMAGEN A INGUR
//     const formData = new FormData(form);
//     fetch('https://api.imgur.com/3/upload', {
//         method:'POST',
//         headers: {
//             'Content-Type' : 'application/json',
//             'Authorization' : `Client-ID ${clientID}`
//         },
//         body: formData
//     }).then((response) => console.log(response))
//         .catch((error) => console.log(error))

//     const productValues = {
//         title: titleProduct.value,
//         descripcion: descriptionProduct.value,
//         precio: priceProduct.value,
//         Imagen: imageProduct.value,
//     }
//     saveANewProduct(productValues)
//         .then((response) => {
//             console.log(response);
//             window.location.href = './index.html'
//         })
//         .catch((error) => console.log(error))
// })

// 

// {}