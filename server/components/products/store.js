//Almacenamiento de la base de datos
const db = require('./model');

//Funcion de agregar un producto
async function addProduct(product) {
    const docRef = db.collection('products');
    return await docRef.add(product);
}

//Funcion para obtener todos los productos
async function getAllProducts() {
    const snapshot = await db.collection('products').get();
    snapshot.forEach((doc) => {
        console.log(doc.id);
    });
    return snapshot.docs.map((product) => {
        return{
            id: product.id,
            product: product.data()
        }
    });
}

//Funcion para obtener un solo producto.
async function getOnlyProduct(title) {
    const productReference = db.collection('products');
    const snapshot = await productReference.where('title', '==', title).get();

    if (snapshot.empty) {
        console.error('No matching!! : ¡¡No hay similitudes!!');
        return;
    } 
    
    return snapshot.docs.map((product) => {
        return {
            id: product.id,
            product: product.data()
        }
    })
}

//Actualizar producto
async function updateProduct(id, change) {
    const product = db.collection('products').doc(id);
    const updateChange = await product.update(change);

    return updateChange
}

//Eliminar producto
async function deleteProduct(id) {
    const productDeleted = await db.collection('products').doc(id).delete();

    return productDeleted
}


module.exports = {
    add: addProduct,
    list: getAllProducts,
    only: getOnlyProduct,
    update: updateProduct,
    delete: deleteProduct,
}
// {}Ç||   []