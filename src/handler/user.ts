import prisma from '../db';
import { comparePassword, createJWT, hashPassword } from '../modules/auth';

export const createNewUser = async (req:any, res:any) => {
    const hash = await hashPassword(req.body.password);
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            password: hash
        },
    });
    const token = createJWT(user);
    res.send({ token });
}

export const signIn = async(req:any,res:any) =>{
    const user = await prisma.user.findUnique({
        where: { name: req.body.name },
    });
    if(!user){
        res.status(401);
        res.send({message:"user not exist"});
    }
    const validPass = await comparePassword(req.body.password,user.password);
    if(!validPass){
        res.status(401);
        res.send({message:"user not exist"}); 
        return;
    }

    const token = createJWT(user);
    res.json({ token });
}