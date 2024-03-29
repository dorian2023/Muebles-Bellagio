const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

//METODO OBTENER
router.get('/', (req, res) => {
    console.log(req.query.id)
    if (req.query.title) {
        controller.getOnlyProduct(req.query.title)
        .then((productsList) => response.success(req, res, productsList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error));
    } else if (req.query.id){
        controller.getOnlyProductByID(req.query.id)
        .then((productsList) => response.success(req, res, productsList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))    
    } else {
        controller.getProducts()
        .then((productsList) => response.success(req, res, productsList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
    }
});

//METODO CREAR
router.post('/', (req, res) => {
    controller.addProduct(req.body)
    .then((product) => response.success(req, res, product, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

//METODO ACTUALIZAR
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateProduct(id, change)
        .then((changedProduct) => response.success(req, res, changedProduct, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

//Metodo Eliminar
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteProduct(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});


module.exports = router;
