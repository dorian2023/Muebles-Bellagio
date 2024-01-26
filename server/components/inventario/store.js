//Almacenamiento de la base de datos
const db = require('./model');

//Funcion de agregar un producto
async function addProduct(product) {
    const docRef = db.collection('inventario');
    return await docRef.add(product);
}

//Funcion para obtener todos los productos
async function getAllProducts() {
    const snapshot = await db.collection('inventario').get();
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
    const productReference = db.collection('inventario');
    const snapshot = await productReference.where('title', '==', title).get();

    if (snapshot.empty) {
        console.error('¡¡No hay similitudes por CATEGORIA!!');
        return;
    } 
    
    return snapshot.docs.map((product) => {
        return {
            id: product.id,
            product: product.data()
        }
    })
}

//Funcion para obtener un solo producto por ID
async function getOnlyProductByID(id) {
    const productReference = db.collection('inventario').doc(`${id}`);
    const snapshot = await productReference.get();

    if (!snapshot.exists) {
        console.error('¡¡No hay similitudes por ID!!');
        return;
    } 
    
    return snapshot.data();
}

//Actualizar producto
async function updateProduct(id, change) {
    const product = db.collection('inventario').doc(id);
    const updateChange = await product.update(change);

    return updateChange
}

//Eliminar producto
async function deleteProduct(id) {
    const productDeleted = await db.collection('inventario').doc(id).delete();

    return productDeleted
}


module.exports = {
    add: addProduct,
    list: getAllProducts,
    only: getOnlyProduct,
    update: updateProduct,
    delete: deleteProduct,
    onlibyid: getOnlyProductByID,
}