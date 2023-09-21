import merge from "lodash.merge";

// make sure NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";

let configEnv: any;

if(stage === 'production'){
   configEnv = require('./production').default;
}else if(stage === 'testing'){
    configEnv = require('./testing').default;
}else {
    configEnv = require('./local').default;
}

export default merge({
    stage,
    dbUrl: process.env.DATABASE_URL,
    jwt: process.env.JWT_SECRET_KEY,
    port: 3004

},configEnv);