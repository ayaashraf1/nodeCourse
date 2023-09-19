import express from 'express';

const app = express();

app.get('/',(req,res)=>{
   res.status(200);
   res.send({message:'hello from express'});
});

export default app;