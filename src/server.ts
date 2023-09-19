import express, { urlencoded } from 'express';
import router from './routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

//[note] middlewares come first
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended:false}))
app.use(cors());

app.get('/',(req,res)=>{
   res.status(200);
   res.send({message:'hello from express'});
});


app.use('/api',router);

export default app;