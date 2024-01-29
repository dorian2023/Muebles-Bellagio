

//FETCH A LA RUTA PARA OBTENER LOS PRODUCTOS
const printProductList = async () => {
    const dataList = await fetch('https://inventario-mb.onrender.com/api/v1/inventario', {
      method: 'GET',
    });
    const dataResult = await dataList.json();
    console.log(dataResult);
    return dataResult;
  }


//AQUI IMPREM EN ESTA MRUTA ESE MISMO CONTENDO EN EL FRONTEND
document.addEventListener('DOMContentLoaded', () => {

    const mostrarDatos = (dataResult) => {
        console.log(dataResult)
        let body = ''
        for (let i = 0; i < dataResult.length; i++) {
            body += `<tr>
                <td> ${productList[i].status}</td>
                <td> ${productList[i].pedido}</td>
                <td> ${productList[i].codigo}</td>
                <td> ${productList[i].categoria}</td>
                <td> ${productList[i].descripcion}</td>
                <td> ${productList[i].tienda}</td>
                <td> ${productList[i].vendedor}</td>
                <td> ${productList[i].cliente}</td>
                <td> ${productList[i].vendedor}</td>
                <td> ${productList[i].fe}</td>
                <td> ${productList[i].fs}</td>
                </tr>`
            
        }
    }

    // printProductList()  
    //     .then((inventario) => {

    //         if (!inventario) {
    //             return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
    //         } else {
    //             const listProducts = inventario.message.map(inventario =>{
    //                 const buttons = () => `
    //                 <div class="buttons-container">
    //                     <button class="update" id="btnUpdate">🔄️</button>
    //                     <button class="delete" id="btnDelete">⛔</button>
    //                 </div>
    //                 `;
    //                 const printProduct = `
    //                 <div class="productContainer" id=${inventario.id}>
    //                     <ul class="listProduct">
    //                         <li>STATUS: ${inventario.product.status}</li>  
    //                         <li>CATEGORIA: ${inventario.product.categoria}</li>
    //                         <li>DESCRIPCION: ${inventario.product.descripcion}</li>  
    //                         <li>CODIGO: ${inventario.product.codigo}</li>  
    //                         <li>PEDIDO: ${inventario.product.pedido}</li>  
    //                         <li>TIENDA: ${inventario.product.tienda}</li>  
    //                         <li>VENDEDOR: ${inventario.product.vendedor}</li>  
    //                         <li>CLIENTE: ${inventario.product.cliente}</li>  
    //                         <li>TRANSPORTE: ${inventario.product.transporte}</li>  
    //                         <li>FECHA ENTRADA: ${inventario.product.fe}</li>  
    //                         <li>FECHA SALIDA: ${inventario.product.fs}</li>  
    //                         ${buttons()}
    //                     </ul>
    //                 </div>
    //                 `;
    //                 return printProduct;
    //                 });
    //                 productList.innerHTML = listProducts.join("");
    //         }
    //     })
    //     .catch((error) => console.error(error));
})
