const statusProduct = document.getElementById('status');
const pedidoProduct = document.getElementById('pedido');
const codigoProduct = document.getElementById('codigo');
const categoriaProduct = document.getElementById('categoria');
const descripcionProduct = document.getElementById('descripcion');
const tiendaProduct = document.getElementById('tienda');
const vendedorProduct = document.getElementById('vendedor');
const clienteProduct = document.getElementById('cliente');
const transporteProduct = document.getElementById('transporte');
const feProduct = document.getElementById('fe');
const fsProduct = document.getElementById('fs');
const btnAdd = document.getElementById('btnAdd');
//aaja

// asdas

const saveANewProduct = async (product) => {
    const productData = await fetch('https://inventario-mb.onrender.com/api/v1/inventario', {
        method: 'POST',
        headers: { 
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(product),
    });
    const newProduct = await productData.json();
    console.log(newProduct);
    return newProduct;
}

btnAdd.addEventListener('click', ()=>{
    const productValues = {
        status: statusProduct.value,
        pedido: pedidoProduct.value,
        codigo: codigoProduct.value,
        categoria: categoriaProduct.value,
        descripcion: descripcionProduct.value,
        tienda: tiendaProduct.value,
        vendedor: vendedorProduct.value,
        cliente:  clienteProduct.value,
        transporte:  transporteProduct.value,
        fe:  feProduct.value,
        fs:  fsProduct.value,
    }
    saveANewProduct(productValues)
        .then((response) =>{
            console.log(response);
            window.location.href = './index.html'
        })
})