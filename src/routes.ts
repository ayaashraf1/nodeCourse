import { Router } from 'express';

const router = Router();

/**
 * Product
 */
router.get('/product',(req,res)=>{
    res.send({message:'get all products'})
});
router.get('/product/:id',()=>{});
router.post('/product',()=>{});
router.put('/product/:id',()=>{});
router.delete('/product/:id',()=>{});

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