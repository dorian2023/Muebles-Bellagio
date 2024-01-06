const titleProduct = document.getElementById('title');
const descripcionProduct = document.getElementById('description');
const priceProduct = document.getElementById('price');
const imageProduct = document.getElementById('image');
const btnUpdate = document.getElementById('btnUpdate');

const params = new URLSearchParams(window.location.search);
const productID = params.get('id');
console.log(productID);

//ME OBTIENE EL ID CON EL METODO FECHT
const getProductByID = async (id) => {
    const productData = await fetch(`http://localhost:3100/products?id=${id}`,{
        method: 'GET',
    })
    const resultData = await productData.json();
    return resultData;
}

const updateAProduct = async (idProduct, changeProduct) => {
    const productData = await fetch(`http://localhost:3100/products/${idProduct}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changeProduct),
    });
    const resultUpdateData = await productData.json();
    console.log(resultUpdateData)
    return resultUpdateData;
}

btnUpdate.addEventListener('click', () => {
   
    getProductByID(productID)
        .then((response) => console.log(response))     
        .catch((error) => console.log(error));
});