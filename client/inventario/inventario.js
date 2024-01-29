// const { error } = require("../../server/response");

const productsList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');

//AQUI MUESTRA ENESTA RUTA EL OBJETO JSON CON TODOS LOS PRODUCTOS DE LA BASE DE DATOS
const printProductList = async () =>{
    const dataList = await fetch('https://inventario-mb.onrender.com/api/v1/inventario', { 
        method: 'GET',
    });
    const dataResult = await dataList.json();
    console.log(dataResult);
    return dataResult;
}

//AQUI IMPREM EN ESTA MRUTA ESE MISMO CONTENDO EN EL FRONTEND
document.addEventListener('DOMContentLoaded', () => {

    printProductList()
        .then((inventario) => {

            if (!inventario) {
                return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
            } else {
                const listProducts = inventario.message.map(inventario =>{
                    const buttons = () => `
                    <div class="buttons-container">
                        <button class="update" id="btnUpdate">🔄️</button>
                        <button class="delete" id="btnDelete">⛔</button>
                    </div>
                    `;
                    const printProduct = `
                    <div class="productContainer" id=${inventario.id}>
                        <ul class="listProduct">
                            <li>STATUS: ${inventario.product.status}</li>  
                            <li>CATEGORIA: ${inventario.product.categoria}</li>
                            <li>DESCRIPCION: ${inventario.product.descripcion}</li>  
                            <li>CODIGO: ${inventario.product.codigo}</li>  
                            <li>PEDIDO: ${inventario.product.pedido}</li>  
                            <li>TIENDA: ${inventario.product.tienda}</li>  
                            <li>VENDEDOR: ${inventario.product.vendedor}</li>  
                            <li>CLIENTE: ${inventario.product.cliente}</li>  
                            <li>TRANSPORTE: ${inventario.product.transporte}</li>  
                            <li>FECHA ENTRADA: ${inventario.product.fe}</li>  
                            <li>FECHA SALIDA: ${inventario.product.fs}</li>  
                            ${buttons()}
                        </ul>
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

    // Buscar el contenedor del producto
    const productContainer = e.target.closest('.productContainer');

    if (productContainer) {
        // Obtener el ID del producto del atributo "id"
        idProduct = productContainer.id;
        
        if (e.target.classList.contains('update')) {
            // Redirigir a la página de actualización con el ID del producto
            window.location.href = `./actualizarProducto.html?id=${idProduct}`;
        }
        
        if (e.target.classList.contains('delete')) {
            // Realizar la lógica para eliminar el producto
            console.log(idProduct);
            deleteProduct(idProduct)
                .then(() => productContainer.remove())
                .catch((error) => console.error(error));
        }
    }
});



// productsList.addEventListener("click", e => {
//     let idProduct;

//     if (e.target.closest('.update')) {
//         idProduct = e.target.parentElement.id;
//         window.location.href = `./updateproduct.html?id=${idProduct}`
//     }
//     if (e.target.closest('.delete')) {
//         idProduct = e.target.parentElement.id;
//         console.log(e.target.parentElement.id);
//         deleteProduct(idProduct)
//         .then(() => e.target.parentElement.remove())
//         .catch((error) => console.error(error))
//     }
// })

// setTimeout(() => {
//     const btnUpdateProduct = document.getElementById("btnUpdateProduct");
//     if (btnUpdateProduct) {
//         btnUpdateProduct.addEventListener('click', () => {
//             window.location.href = "./updateproduct.html";
//     })
//     }
// }, 6000)

btnAddProduct.addEventListener('click', () => {
    window.location.href = "./actualizarProducto.html";
});

//FUNCION PARA ELIMINAR EL PRODUCTO DESDE EL FRONTEND
const deleteProduct = async (id) => {
    const deletedProduct = await fetch(`http://localhost:4000/api/v1/inventario/${id}`,{
        method: 'DELETE',
    })
    const deleteSuccess = await deletedProduct.json();
    return deleteSuccess;
}

//FUNCION PARA BOTON BUSCAR
const getOneProduct = async (titleProduct) => {    
    const oneProduct = await fetch(`http://localhost:4000/api/v1/inventario?title=${titleProduct}`, {
        method: 'GET',
    });

    const getProduct = await oneProduct.json();
    return getProduct;
}

//BOTON BUSCAR
/*btnSearch.addEventListener('click', () => {
    const productDetails = inputSearch.value || '';
    getOneProduct(productDetails)
    .then((products) => {

        if (!products) {
            return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
        } else {
            const listProducts = products.message.map(products =>{

                const buttons = () => `
                <div class="buttons-container">
                    <button class="update" id="btnUpdateProduct">🔄️</button>
                    <button class="delete" id="btnDeleteProduct">⛔</button>
                </div>
                `;
                const getOneProduct = `
                <div class="productContainer" id=${products.id}>
                    <ul class="listProduct">
                        <li>CATEGORIA: ${products.product.title}</li>
                        <li>DESCRIPCION: ${products.product.descripcion}</li>  
                        <li>CODIGO: ${products.product.precio}</li>  
                        <img src="${products.product.image}" />
                        ${buttons()}
                    </ul>
                </div>
                `;

                return getOneProduct;

            });
            productList.innerHTML = listProducts.join("");
        }
    })     
    .catch((error) => console.log(error));
});*/