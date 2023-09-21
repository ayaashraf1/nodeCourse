import { Router } from 'express';
import { errorHandler } from './modules/middlewares';
import { body } from "express-validator";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct } from './handler/product';

const router = Router();

/**
 * Product
 */
router.get('/product',getAllProducts);
router.get('/product/:id',getOneProduct);
router.post('/product',body("name").isString(),errorHandler,createProduct);
router.put('/product/:id',body("name").isString(),errorHandler,updateProduct);
router.delete('/product/:id',deleteProduct);

/**
 * Updates
 */
router.get('/update',(req,res)=>{
    res.send({message:'get all updates'})
});
router.get('/update/:id',()=>{});
router.post('/update',()=>{});
router.put('/update/:id',()=>{});
router.delete('/update/:id',()=>{});


/**
 * User
 */
router.get('/user',(req,res)=>{
    res.send({message:'get all users'})
});
router.get('/user/:id',()=>{});
router.post('/user',()=>{});
router.put('/user/:id',()=>{});
router.delete('/user/:id',()=>{});


export default router;