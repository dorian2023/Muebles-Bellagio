const productsList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');
const loaderDiv = document.getElementById('loader');

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
                        <button id="test" onclick="${updateProduct}">Actualizar Product</button>
                        <button id="btnDeleteProduct">Eliminar Producto</button>
                        `
                    const printProduct = `
                        <ul class="listProduct">
                            <li>Title: ${products.id}</li>
                            <li>Title: ${products.product.titulo}</li>
                            <li>Descipcion: ${products.product.descripcion}</li>  
                            <li>Descipcion: ${products.precio}</li  
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


btnAddProduct.addEventListener('click', () => {
    window.location.href = "./addproduct.hmtl";
})



// {}||   [] <>