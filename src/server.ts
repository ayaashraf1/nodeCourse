import express from 'express';
import router from './routes';

const app = express();

app.get('/',(req,res)=>{
   res.status(200);
   res.send({message:'hello from express'});
});

app.use('/api',router);

export default app;