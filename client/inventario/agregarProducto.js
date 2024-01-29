const form = document.getElementById('signup');
const status = document.getElementById('status');
const pedido = document.getElementById('pedido');
const codigo = document.getElementById('codigo');
const categoria = document.getElementById('categoria');
const descripcion = document.getElementById('descripcion');
const tienda = document.getElementById('tienda');
const vendedor = document.getElementById('vendedor');
const cliente = document.getElementById('cliente');
const transporte = document.getElementById('transporte');
const fe = document.getElementById('fe');
const fs = document.getElementById('fs');
// const btnAdd = document.getElementById('btnAdd');

const clientID = "f00bc3fa8e97aea";
console.log(clientID);

const saveANewProduct = async (product) => {

    const productData = await fetch ('https://inventario-mb.onrender.com/api/v1/products', {
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