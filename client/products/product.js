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
                        return window.location.href = './updateproduct.html';
                    }

                    const buttons = () => `
                        <button class="update" id="btnUpdateProduct">Actualizar Product</button>
                        <button class="delete" id="btnDeleteProduct">Eliminar Producto</button>
                        `
                    const printProduct = `
                    <div class="productContainer" id=${products.id}>
                        <ul class="listProduct">
                            <li>CATEGORIA: ${products.product.title}</li>
                            <li>DESCRIPCION: ${products.product.descripcion}</li>  
                            <li>PRECIO: ${products.product.precio}</li>  
                            <img src="${products.product.image}" />
                        </ul>
                        ${buttons()}
                    </div>
                    `;
                    return printProduct;

                });
                productList.innerHTML = listProducts.join("");
            }
        })
        .catch((error) => console.error(error));
})

productsList.addEventListener("click", e => {
    let idProduct;

    if (e.target.closest('.update')) {
        idProduct = e.target.parentElement.id;
        window.location.href = `./updateproduct.html?id=${idProduct}`
    }
    if (e.target.closest('.delete')) {
        idProduct = e.target.parentElement.id;
        console.log(e.target.parentElement.id);
        deleteProduct(idProduct)
        .then(() => e.target.parentElement.remove())
        .catch((error) => console.error(error))
    }
})

// setTimeout(() => {
//     const btnUpdateProduct = document.getElementById("btnUpdateProduct");
//     if (btnUpdateProduct) {
//         btnUpdateProduct.addEventListener('click', () => {
//             window.location.href = "./updateproduct.html";
//     })
//     }
// }, 6000)

btnAddProduct.addEventListener('click', () => {
    window.location.href = "./addproduct.html";
});

//FUNCION PARA ELIMINAR EL PRODUCTO DESDE EL FRONTEND
const deleteProduct = async (id) => {
    const deletedProduct = await fetch(`http://localhost:3100/products/${id}`,{
        method: 'DELETE',
    })
    const deleteSuccess = await deletedProduct.json();
    return deleteSuccess;
}

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

                const buttons = () => `
                    <button id="btnUpdateProduct">Actualizar Product</button>
                    <button id="btnDeleteProduct">Eliminar Producto</button>
                    `
                const getOneProduct = `
                <div class="productContainer" id=${products.id}>
                        <ul class="listProduct">
                            <li>CATEGORIA: ${products.product.title}</li>
                            <li>DESCRIPCION: ${products.product.descripcion}</li>  
                            <li>PRECIO: ${products.product.precio}</li>  
                            <img src="${products.product.imagen}" />
                        </ul>
                        ${buttons()}
                    </div>
                    `;
                return getOneProduct;

            });
            productList.innerHTML = listProducts.join("");
        }
    })     
    .catch((error) => console.log(error));
});














// //FUNCION PARA BOTON BUSCAR
// const getOneProduct = async (titleProduct) => {    
//     const oneProduct = await fetch(`http://localhost:3100/products?title=${titleProduct}`, {
//         method: 'GET',
//     });

//     const getProduct = await oneProduct.json();
//     return getProduct;
// }
// //BOTON BUSCAR
// btnSearch.addEventListener('click', () => {
//     const productDetails = inputSearch.value || '';
//     getOneProduct(productDetails)
//     .then((products) => {

//         if (!products) {
//             return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
//         } else {
//             const listProducts = products.message.map(products =>{

//                 function updateProduct() {
//                     return window.location.href = './updateproduct.html';ç
//                 }

//                 const buttons = () => `
//                     <button id="btnUpdateProduct">Actualizar Product</button>
//                     <button id="btnDeleteProduct">Eliminar Producto</button>
//                     `
//                 const getOneProduct = `
//                     <ul class="listProduct">
//                         <li>CODIGO: ${products.id}</li>
//                         <li>CATEGORIA: ${products.product.title}</li>
//                         <li>DESCRIPCION: ${products.product.descripcion}</li>  
//                         <li>PRECIO: ${products.product.precio}</li>  
//                         <img src="${products.product.Imagen}" />
//                     </ul>
//                     ${buttons()}
//                 `;
//                 return getOneProduct;

//             });
//             productList.innerHTML = listProducts.join("");
//         }
//     })     
//     .catch((error) => console.log(error));
// });


// {}||   [] <>