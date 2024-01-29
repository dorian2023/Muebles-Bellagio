const statusProduct = document.getElementById('status');
const codigoProduct = document.getElementById('codigo');
const pedidoProduct = document.getElementById('pedido');
const categoriaProduct = document.getElementById('categoria');
const descripcionProduct = document.getElementById('descripcion');
const tiendaProduct = document.getElementById('tienda');
const vendedorProduct = document.getElementById('vendedor');
const clienteProduct = document.getElementById('cliente');
const transporteProduct = document.getElementById('transporte');
const feProduct = document.getElementById('fe');
const fsProduct = document.getElementById('fs');
const imageProduct = document.getElementById('image');
const btnUpdate = document.getElementById('btnUpdate');

const params = new URLSearchParams(window.location.search);
const productID = params.get('id');
console.log(productID);

//ME OBTIENE EL ID CON EL METODO FECHT
const getProductByID = async (id) => {
    const productData = await fetch(`https://inventario-mb.onrender.com/api/v1/inventario?id=${id}`,{
        method: 'GET',
    })
    const resultData = await productData.json();
    return resultData;
}

const updateAProduct = async (idProduct, changeProduct) => {
    const productData = await fetch(`https://inventario-mb.onrender.com/api/v1/inventario/${idProduct}`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changeProduct),
    });
    const resultUpdateData = await productData.json();
    console.log(resultUpdateData)
    return resultUpdateData;
}

document.addEventListener('DOMContentLoaded', () => {   
   
    //CARGA LOS DATOS DEL PRODUTO A ACTUALIZAR EN LOS INPUT DEL UPDATE.HTML  
    getProductByID(productID)
        .then((returnProduct) => {
            statusProduct.value = returnProduct.message.status;
            codigoProduct.value = returnProduct.message.codigo;
            pedidoProduct.value = returnProduct.message.pedido;
            categoriaProduct.value = returnProduct.message.categoria;
            descripcionProduct.value = returnProduct.message.descripcion;
            tiendaProduct.value = returnProduct.message.tienda;
            vendedorProduct.value = returnProduct.message.vendedor;
            clienteProduct.value = returnProduct.message.cliente;
            transporteProduct.value = returnProduct.message.transporte;
            feProduct.value = returnProduct.message.fe;
            fsProduct.value = returnProduct.message.fs;
            imageProduct.value = returnProduct.message.image;
        })     
        .catch((error) => console.log(error));
});

btnUpdate.addEventListener('click', () => {
    const statusUpdate = statusProduct.value;
    const codigoUpdate = codigoProduct.value;
    const pedidoUpdate = pedidoProduct.value;
    const categoriaUpdate = categoriaProduct.value;
    const descripcionUpdate = descripcionProduct.value;
    const tiendaUpdate = tiendaProduct.value;
    const vendedorUpdate = vendedorProduct.value;
    const clienteUpdate = clienteProduct.value;
    const transporteUpdate = transporteProduct.value;
    const feUpdate = feProduct.value;
    const fsUpdate = fsProduct.value;
    const imageUpdate = imageProduct.value;

    const changeProduct = {
        status: statusUpdate,
        codigo: codigoUpdate,
        pedido: pedidoUpdate,
        categoria: categoriaUpdate,
        descripcion: descripcionUpdate,
        tienda: tiendaUpdate,
        vendedor: vendedorUpdate,
        cliente: clienteUpdate,
        transporte: transporteUpdate,
        fe: feUpdate,
        fs: fsUpdate,
        image: imageUpdate
    }
    updateAProduct(productID, changeProduct)
        .then(() => window.location.href = './index.hmtl')
        .catch((error) => console.error(error));
});


// {}Ç||   []     