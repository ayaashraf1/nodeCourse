import { Router } from 'express';
import { errorHandler } from './modules/middlewares';
import { body } from "express-validator";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from './handler/product';
import { createUpdate, deleteUpdate, getAllUpdate, getOneUpdate, updateUpdate } from './handler/update';

const router = Router();

/**
 * Product
 */
/**
 * @swagger
 * paths:
 *  /producct:
 * get:
 * description: get all products!
 * response:
 * 200:
 *   content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/product', getAllProducts);
router.get('/product/:id', getOneProduct);
router.post('/product', body("name").isString(), errorHandler, createProduct);
router.put('/product/:id', body("name").isString(), errorHandler, updateProduct);
router.delete('/product/:id', deleteProduct);

/**
 * Updates
 */
router.get('/update', getAllUpdate);
router.get('/update/:id', getOneUpdate);
router.post('/update',
    errorHandler,
    body("title").exists().isString(),
    body("body").exists().isString(),
    body("productId").exists().isString(),
    createUpdate);
router.put('/update/:id', errorHandler, body("title").exists().isString(),
    body("body").exists().isString(), updateUpdate);
router.delete('/update/:id', deleteUpdate);


/**
 * User
 */
router.get('/user', (req, res) => {
    res.send({ message: 'get all users' })
});
router.get('/user/:id', () => { });
router.post('/user', () => { });
router.put('/user/:id', () => { });
router.delete('/user/:id', () => { });


export default router;