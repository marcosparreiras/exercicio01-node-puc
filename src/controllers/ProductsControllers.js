const { randomUUID } = require('node:crypto');
const Database = require('../database');
const validateBodyRequest = require('../utils/validateBodyRequest');
const AppError = require('../utils/AppError');

const database = new Database();

class ProductsControlles {
  // @GET /products
  async index(_req, res) {
    const products = database.selectAll('products');
    res.status(200).json({ products });
  }

  // @GET /products/:id
  async show(req, res) {
    const { id } = req.params;
    const product = database.selectById('products', id);
    if (!product) {
      throw new AppError('Product not found');
    }
    res.status(200).json({ product });
  }

  // @POST /products
  async create(req, res) {
    const { description, price, brand } = validateBodyRequest(req, [
      'description',
      'price',
      'brand',
    ]);

    const id = randomUUID();
    database.insert('products', {
      id,
      description,
      price,
      brand,
    });

    res.status(201).json({ status: 'success', id });
  }

  // @PUT /products/:id
  async update(req, res) {
    const { id } = req.params;
    const { description, price, brand } = validateBodyRequest(req, [
      'description',
      'price',
      'brand',
    ]);

    const product = database.selectById('products', id);
    if (!product) {
      throw new AppError('Product not found');
    }

    database.update('products', id, { description, price, brand });

    res.status(202).json({ status: 'success', id });
  }

  // @DELETE /products/:id
  async delete(req, res) {
    const { id } = req.params;
    const { description, price, brand } = validateBodyRequest(req, [
      'description',
      'price',
      'brand',
    ]);

    const product = database.selectById('products', id);
    if (!product) {
      throw new AppError('Product not found');
    }

    database.delete('products', id);

    res.status(204).json();
  }
}

module.exports = ProductsControlles;
