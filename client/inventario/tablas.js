//FETCH A LA RUTA PARA OBTENER LOS PRODUCTOS
const printProductList = async () => {
    try {
      const dataList = await fetch('https://inventario-mb.onrender.com/api/v1/inventario', {
        method: 'GET',
      });
      const dataResult = await dataList.json();
      console.log(dataResult);
      return dataResult;
    } catch (error) {
      console.error(error);
      throw error; // Re-lanza el error para que pueda ser manejado fuera de esta función si es necesario.
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {    
    printProductList()  
      .then((inventario) => {
        const productList = document.getElementById('product'); // Obtén la referencia al elemento donde se imprimirán los productos
  
        if (!inventario) {
          return productList.innerHTML = `<h2>Cargando...</h2>`;
        } else {
          const listProducts = inventario.message.map(inventario => {
            // Determinar la clase según el estado del producto
            const statusClass = inventario.product.status === 'VENDIDO' ? 'vendido' : 'disponible';
  
            return `<tr class="filas">
                      <td class="${statusClass}"> ${inventario.product.status}</td>
                      <td> ${inventario.product.pedido}</td>
                      <td> ${inventario.product.codigo}</td>
                      <td> ${inventario.product.categoria}</td>
                      <td> ${inventario.product.descripcion}</td>
                      <td> ${inventario.product.tienda}</td>
                      <td> ${inventario.product.vendedor}</td>
                      <td> ${inventario.product.cliente}</td>
                      <td> ${inventario.product.transporte}</td>
                      <td> ${inventario.product.fe}</td>
                      <td> ${inventario.product.fs}</td>
                    </tr>`;
          });
          productList.innerHTML = listProducts.join("");
        }
      })
      .catch((error) => console.error(error));
  });
  
  


//FETCH A LA RUTA PARA OBTENER LOS PRODUCTOS
/*const printProductList = async () => {
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
                 const printProduct = ''

                 for (let i = 0; i < productsList.length; i++) {
                    printProduct += `<tr>
                    <td> ${productList[i].id}</td>
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
                    return printProduct;
                    });
                    productList.innerHTML = listProducts.join("");
            }
         })
         .catch((error) => console.error(error));
})*/
