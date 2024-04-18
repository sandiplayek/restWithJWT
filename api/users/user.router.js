const {createUser, getUserByUserId, getUsers, updateUser, deleteUser, login} = require('./user.controller');
const router = require('express').Router();
const { checkToken } = require('../../auth/token_validation');
const { addUserValidation,addLoginValidation } = require('../../validation/users/user.validation');

//router arguments are path, ...middleware, module
router.post('/', checkToken, addUserValidation, createUser);
router.get('/', checkToken, getUsers);
router.get('/:id', checkToken, getUserByUserId);
router.patch('/', checkToken, updateUser);
router.delete('/', checkToken, deleteUser);
router.post('/login', addLoginValidation, login);

module.exports = router;