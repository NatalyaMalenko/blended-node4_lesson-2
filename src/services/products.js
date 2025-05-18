import { Product } from '../db/models/products.js';

export const allProducts = async () => {
  const products = await Product.find();
  return products;
};

export const productById = async (productId) => {
  const product = await Product.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  const product = await Product.create(payload);
  return product;
};

export const updateProduct = async (productId, payload) => {
  const product = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });
  return product;
};
export const deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);
  return product;
};
