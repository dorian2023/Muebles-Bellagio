const titleProduct = document.getElementById('titulo');
const descriptionProduct = document.getElementById('descripcion');
const priceProduct = document.getElementById('precio');
const imageProduct = document.getElementById('Imagen');
const btnAdd = document.getElementById('btnAdd');

const saveANewProduct = async (product) => {
    const productData = await fetch ('http://localhost:3100/products', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(product)
    });
    const newProduct = await productData.json();
    console.log(newProduct);
    return newProduct;
}

btnAdd.addEventListener('click', ()=> {
    const productValues = {
        titulo: titleProduct.value,
        descripcion: descriptionProduct.value,
        precio: priceProduct.value,
        Imagen: imageProduct.value,
    }
    saveANewProduct(productValues)
        .then((response) => {
            console.log(response);
            window.location.href = './index.html'
        })
        .catch((error) => console.log(error))
})



// {}