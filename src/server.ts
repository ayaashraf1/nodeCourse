import express, { urlencoded } from 'express';
import router from './routes';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, signIn } from './handler/user';
import swaggerUI from "swagger-ui-express";

const swaggerDocument = require('./swagger.json');
const app = express();

//[note] middlewares come first
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({ extended: false }))
app.use(cors());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get('/', (req, res) => {
   res.status(200);
   res.send({ message: 'hello from express' });
});


app.use('/api', protect, router);
app.post('/createnewuser', createNewUser);
app.post('/signin', signIn);

app.use((err, req, res, next) => {
   console.log(err.type, err.message);
   if (err.type === 'auth') {
      res.status(401).json({ message: 'unauthorized' });
   }
   else if (err.type === 'input') {
      res.status(400).json({ message: 'invaild data' });
   }
   else {
      res.status(500).json({ message: 'Oops, that is on us!!' });
   }
});
export default app;