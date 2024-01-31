const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../response/index');


router.get('/', (req, res) => {
    const email = req.query.email;
    if (!req.cookies.token) {
        res.json({
            "Unauthorized": "No token provided"
        })
    } else {
        if (email) {
            controller.getUsers(email)
                .then((user) => response.success(req, res, user, 200))
                .catch((error) => response.error(req, res, 'Error Interno', 500, error));
        } else {
            controller.getUsers()
                .then((user) => response.success(req, res, user, 200))
                .catch((error) => response.error(req, res, 'Error Interno', 500, error))
        }
    }
});

router.post('/', (req, res) => {
    controller.addUser(req.body)
        .then((user) => response.success(req, res, user, 201))
        .catch((error) => response.error(req, res, 'Error Interno', 500, error))
});

module.exports = router;