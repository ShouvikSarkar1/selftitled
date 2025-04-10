let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// get users
router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
});

// create user
router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res);
});

// update user
router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res);
})

// delete user
router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res);
})

module.exports = router;