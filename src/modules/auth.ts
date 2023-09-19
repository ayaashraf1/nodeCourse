import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

export const comparePassword = (password,hasPassword) =>{
  return bcrypt.compareSync(password,hasPassword);
}

export const hashPassword = (password) =>{
    return bcrypt.hashSync(password,5);
}
export const createJWT = (user: { id: string; name: string; }) => {
    const token = jwt.sign({
        id: user.id,
        username: user.name
    }
        , process.env.JWT_SECRET_KEY);

    return token;
}


export const protect = (req,res,next) =>{

    const bearer = req.header.Authorization;
    if(!bearer){
        res.status(401);
        res.send('unauthorized');
        return;
    }

    const [,token] = bearer.split(' ');

    if(!token){
        res.status(401);
        res.send('invalid token');
        return;
    }

    try{
        const payload = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user = payload
        console.log(payload);
        next();
    }
    catch(error){
        console.log(error);
        res.status(401);
        res.send('invalid token');
        return;
    };

}
