const productsList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');
const loaderDiv = document.getElementById('loader');

const printProductList = async () =>{
    const dataList = await fetch('http://localhost:3100/products', { method: 'GET'})
    const dataResult = await dataList.json();
    console.log(dataResult);
    return dataResult
}

document.addEventListener('DOMContentLoaded', () => {
    printProductList()
        .then((products) => {

            if (!products) {
                return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
            } else {
                const listProducts = products.message.map(products =>{
                    function updateProduct() {
                        return window.location.href = './updateproduct.html'
                    }

                const buttons = () => `
                        <button id="test" onclick="${updateProduct}">Actualizar Product</button>
                        <button id="btnDeleteProduct">Eliminar Producto</button>
                    `
                const printProduct = `
                    <ul clas="listProduct">
                        <li>Title: ${products.product.title}</li>
                        <li>Descipcion: ${products.product.description}</li>  
                        <img src="${products.product.image}" />
                    </u>
                    ${buttons()}
                `;
                return printProduct;

                });
                productsList.innerHTML = listProducts.join("");
            }
        })
        .catch((error) => console.error(error));
})

btnAddProduct.addEventListener('click', () => {
    window.location.href = "./addproduct.hmtl";
})



// {}||   [] <>