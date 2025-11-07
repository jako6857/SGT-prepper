import { Router } from 'express';
import { getRecord, getRecords } from '../controllers/productController';

const routes = Router();

// Get product details by slug (independent of category)
routes.get('/details/:slug', getRecord);

// Get single product within a category by slug
routes.get('/:category/:slug', getRecord);

// Get all products for a category
routes.get('/:category', getRecords);

export const productRoutes = routes;