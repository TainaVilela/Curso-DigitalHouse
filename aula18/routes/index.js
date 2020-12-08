var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', indexController.showIndex);
router.get('/sobre', indexController.showSobre);

/*criar uma rota tipo get para /pizzas/:id
direcionando a req para pizzas controller.getpizzas*/
router.get('/pizzas/:id', PizzasController.getPizza);

module.exports = router;
