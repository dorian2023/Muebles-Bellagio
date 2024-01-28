const productsList = document.getElementById('productList');
const btnAddProduct = document.getElementById('btnAddProduct');
const inputSearch = document.getElementById('inputSearch');
const btnSearch = document.getElementById('btnSearch');

//FETCH A LA RUTA PARA OBTENER LOS PRODUCTOS
const printProductList = async () => {
  const dataList = await fetch('https://inventario-mb.onrender.com/api/v1/products', {
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
        const listProducts = products.message.map(products => {
          const buttons = () => `
                    <div class="buttons-container">
                        <button class="update" id="btnUpdateProduct">🔄️</button>
                        <button class="delete" id="btnDeleteProduct">⛔</button>
                    </div>
                    `;
          const printProduct = `
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
          return printProduct;

        });
        productList.innerHTML = listProducts.join("");
      }
    })
    .catch((error) => console.error(error));
})

productsList.addEventListener("click", e => {
  let idProduct;
  const productContainer = e.target.closest('.productContainer');

  if (productContainer) {
    idProduct = productContainer.id;

    if (e.target.classList.contains('update')) {
      window.location.href = `./updateproduct.html?id=${idProduct}`;
    }
    if (e.target.classList.contains('delete')) {
      console.log(idProduct);
      deleteProduct(idProduct)
        .then(() => productContainer.remove())
        .catch((error) => console.error(error));
    }
  }
});

btnAddProduct.addEventListener('click', () => {
  window.location.href = "./addproduct.html";
});

//FUNCION PARA ELIMINAR EL PRODUCTO DESDE EL FRONTEND
const deleteProduct = async (id) => {
  const deletedProduct = await fetch(`https://inventario-mb.onrender.com/api/v1/products/${id}`, {
    method: 'DELETE',
  })
  const deleteSuccess = await deletedProduct.json();
  return deleteSuccess;
}

//FUNCION PARA BOTON BUSCAR
const getOneProduct = async (titleProduct) => {
  const oneProduct = await fetch(`https://inventario-mb.onrender.com/api/v1/products?title=${titleProduct}`, {
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
      // VALIDACION PARA MOSTRAR PRODUCTO
      if (!products) {
        return loaderDiv.innerHTML = `<h2>Cargando...</h2>`;
      } else {
        const listProducts = products.message.map(products => {
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
});
