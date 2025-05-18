import {
  allProducts,
  productById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../services/products.js';
import createHttpError from 'http-errors';

export const getProductsController = async (req, res) => {
  const products = await allProducts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found products',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const productId = req.params.productId;
  const product = await productById(productId);

  if (product === null) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProductController = async (req, res) => {
  const productId = req.params.productId;
  const result = await updateProduct(productId, req.body);
  if (result === null) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result,
  });
};
export const deleteProductController = async (req, res) => {
  const productId = req.params.productId;
  const result = await deleteProduct(productId);

  if (result === null) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(204).end();
};
