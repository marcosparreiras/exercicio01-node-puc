const { Router } = require('express');
const productsRoutes = require('./products.routes');

const routes = Router();

routes.use('/products', productsRoutes);

module.exports = routes;
