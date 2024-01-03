const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');

router.get('/', (req, res) => {
    if (req.body.title) {
        controller.getOnlyProduct(req.body.title)
        .then((productsList) => response.success(req, res, productsList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error));
    } else {
        controller.getProducts()
        .then((productsList) => response.error(req, res, productsList, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error))
    }
});

router.post('/', (req, res) => {
    controller.addProduct(req.body)
    .then((product) => response.success(req, res, product, 201))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const change = req.body;
    controller.updateProduct(id, change)
        .then((changeProduct) => response.success(req, res, changeProduct, 200))
        .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteProduct(id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, 'Internal Error', 500, error));
});

module.exports = router;




// {}  ||   []