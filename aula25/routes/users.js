var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

/*Retornando formulário de cadastro de usuário */
router.get('/create', UserController.create);

/*Processando requisição do formulário de cadastro para salvar usuário */
router.post('/save', UserController.save);

/* retornando formulario de login de usuarios */
router.get('/login', UserController.login);

/* processando requisicao do formulario de login para autenticar usuario */
router.post('/authenticate', UserController.authenticate);

module.exports = router;