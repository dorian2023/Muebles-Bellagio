const titleProduct = document.getElementById('title');
const descriptionProduct = document.getElementById('description');
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

document.addEventListener('DOMContentLoaded', () => {   
   
    //CARGA LOS DATOS DEL PRODUTO A ACTUALIZAR EN LOS INPUT DEL UPDATE.HTML  
    getProductByID(productID)
        .then((returnProduct) => {
            titleProduct.value = returnProduct.message.title;
            descriptionProduct.value = returnProduct.message.descripcion;
            priceProduct.value = returnProduct.message.precio;
            imageProduct.value = returnProduct.message.image;
        })     
        .catch((error) => console.log(error));
});

btnUpdate.addEventListener('click', () => {
    const titleUpadte = titleProduct.value;
    const descriptionUpdate = descriptionProduct.value;
    const priceUpdate = priceProduct.value;
    const imageUpdate = imageProduct.value;

    const changeProduct = {
        title: titleUpadte,
        descripcion: descriptionUpdate,
        precio: priceUpdate,
        image: imageUpdate
    }
    updateAProduct(productID, changeProduct)
        .then(() => window.location.href = './index.hmtl')
        .catch((error) => console.error(error));
});


// {}Ç||   []