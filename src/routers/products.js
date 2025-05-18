import express from 'express';
import { Router } from 'express';
import {
  getProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';

export const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

const router = express.Router();
const jsonParser = express.json();

router.get('/products', ctrlWrapper(getProductsController));
router.get('/products/:productId', ctrlWrapper(getProductByIdController));
router.post('/products', ctrlWrapper(createProductController));
router.patch(
  '/products/:productId',
  jsonParser,
  ctrlWrapper(updateProductController),
);
router.delete('/products/:productId', ctrlWrapper(deleteProductController));

export default router;
