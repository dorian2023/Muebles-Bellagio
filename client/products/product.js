// const { error } = require("../../server/response");

const productsList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');

//AQUI MUESTRA ENESTA RUTA EL OBJETO JSON CON TODOS LOS PRODUCTOS DE LA BASE DE DATOS
const printProductList = async () =>{
    const dataList = await fetch('http://localhost:3100/products', { 
        method: 'GET',
    });
    const dataResult = await dataList.json();
    console.log(dataResult);
    return dataResult;
}

//AQUI IMPREM EN ESTA MRUTA ESE MISMO CONTENDO EN EL FRONTEND
document.addEventListener('DOMContentLoaded', () => {

    printProductList()
        .then((products) => {

            if (!products) {
                return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
            } else {
                const listProducts = products.message.map(products =>{

                    function updateProduct() {
                        return window.location.href = './updateproduct.html';ç
                    }

                    const buttons = () => `
                        <button id="btnUpdateProduct">Actualizar Product</button>
                        <button id="btnDeleteProduct">Eliminar Producto</button>
                        `
                    const printProduct = `
                        <ul class="listProduct">
                            <li>CODIGO: ${products.id}</li>
                            <li>CATEGORIA: ${products.product.title}</li>
                            <li>DESCRIPCION: ${products.product.descripcion}</li>  
                            <li>PRECIO: ${products.product.precio}</li>  
                            <img src="${products.product.Imagen}" />
                        </ul>
                        ${buttons()}
                    `;
                    return printProduct;

                });
                productList.innerHTML = listProducts.join("");
            }
        })
        .catch((error) => console.error(error));
})

setTimeout(() => {
    const btnUpdateProduct = document.getElementById("btnUpdateProduct");
    if (btnUpdateProduct) {
        btnUpdateProduct.addEventListener('click', () => {
            window.location.href = "./updateproduct.html";
    })
    }
}, 6000)

btnAddProduct.addEventListener('click', () => {
    window.location.href = "./addproduct.html";
});

//FUNCION PARA BOTON BUSCAR
const getOneProduct = async (titleProduct) => {    
    const oneProduct = await fetch(`http://localhost:3100/products?title=${titleProduct}`, {
        method: 'GET',
    });

    const getProduct = await oneProduct.json();
    return getProduct;
}
//BOTON BUSCAR
btnSearch.addEventListener('click', () => {
    const productDetails = inputSearch.value || '';
    getOneProduct(productDetails)
    .then((products) => {

        if (!products) {
            return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
        } else {
            const listProducts = products.message.map(products =>{

                function updateProduct() {
                    return window.location.href = './updateproduct.html';ç
                }

                const buttons = () => `
                    <button id="btnUpdateProduct">Actualizar Product</button>
                    <button id="btnDeleteProduct">Eliminar Producto</button>
                    `
                const getOneProduct = `
                    <ul class="listProduct">
                        <li>CODIGO: ${products.id}</li>
                        <li>CATEGORIA: ${products.product.title}</li>
                        <li>DESCRIPCION: ${products.product.descripcion}</li>  
                        <li>PRECIO: ${products.product.precio}</li>  
                        <img src="${products.product.Imagen}" />
                    </ul>
                    ${buttons()}
                `;
                return getOneProduct;

            });
            productList.innerHTML = listProducts.join("");
        }
    })     
    .catch((error) => console.log(error));
});


// {}||   [] <>