const { Router } = require('express');
const ProductsControlles = require('../controllers/ProductsControllers');

const productsRoutes = Router();
const productsControllers = new ProductsControlles();

productsRoutes.get('/', productsControllers.index);
productsRoutes.get('/:id', productsControllers.show);
productsRoutes.post('/', productsControllers.create);
productsRoutes.put('/:id', productsControllers.update);
productsRoutes.delete('/:id', productsControllers.delete);

module.exports = productsRoutes;
