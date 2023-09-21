import prisma from "../db"

/**
 * get all product for signin user
 */
export const getAllProducts = async(req,res) =>{
    const user = await prisma.user.findUnique({
        where:{
            id: req.user.id
        },
        include:{
            products:true
        }
    });
    res.status(200);
    res.json({products:user.products});
}
/**
 * get one product 
 */
export const getOneProduct = async(req,res) =>{
    const product = await prisma.product.findUnique({
        where:{
            id : req.params.id
        }
    });
    res.status(200);
    res.json({data:product});
}
/**
 * create new product
 */
export const createProduct = async(req,res) =>{
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    });
    res.status(200);
    res.json({data:product});
}
//update product related to sign in user
export const updateProduct = async(req,res)=>{
    const updated = await prisma.product.update({
        where:{
            id: req.params.id,
            belongsToId: req.user.id
        },
        data:{
            name: req.body.name
        }
    });

    res.status(200);
    res.json({data:updated});

}

//delete product related to sign in user
export const deleteProduct = async(req,res)=>{
  const product = await prisma.product.delete({
    where: {
        id: req.params.id,
        belongsToId: req.user.id
    }
  });
  res.status(200);
  res.json({message:`this element ${product.name} is deleted successfully`});
}