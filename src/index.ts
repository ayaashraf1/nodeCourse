import * as dotenv from 'dotenv';

dotenv.config();

import app from './server';

app.listen('3004',()=>{
    console.log('localhost running on 3004');
})