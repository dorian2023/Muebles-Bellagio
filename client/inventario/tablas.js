//AQUI MUESTRA ENESTA RUTA EL OBJETO JSON CON TODOS LOS PRODUCTOS DE LA BASE DE DATOS
const printProductList = async () =>{
    let url = 'http://localhost:4000/api/v1/inventario'
    const dataList = await fetch(url, { 
        method: 'GET',
    });

    const dataResult = await dataList.json();
    console.log(dataResult);
    return dataResult;
}

//AQUI IMPREM EN ESTA MRUTA ESE MISMO CONTENDO EN EL FRONTEND
/*document.addEventListener('DOMContentLoaded', () => {

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
})*/
