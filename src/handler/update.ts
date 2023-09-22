import prisma from '../db';

/**
 * get all update related to sign in user
 */
export const getAllUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            belongsToId: req.user.id,
        },
        include: {
            updates: true
        }
    });
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates];
    }, []);

    res.status(200);
    res.json({ data: updates });
}
/**
 * create new update related to specific product
 */
export const createUpdate = async (req, res) => {
    //check if this product alreday exist or not 
    const product = await prisma.product.findUnique({
        where: {
            id: req.body.productId
        },
        include: {
            updates: true
        }
    });
    if (!product) {
        res.status(404);
        res.json({ message: "this product doesn't exist" });
        return;
    }
    // then we add this update to product
    const update = await prisma.update.create({
        data: {
            title: req.body.title,
            body: req.body.body,
            productId: req.body.productId

        }
    });

    res.status(200);
    res.json({ data: update });
}

/**
 * get one update related to sign in user
 */
export const getOneUpdate = async (req, res) => {
    const update = await prisma.update.findUnique({
        where: {
            id: req.params.id,
        }
    });
    if (!update) {
        res.status(404);
        res.json({ message: "this update doesn't exist" });
        return;
    }
    res.status(200);
    res.json({ data: update });
}
/**
 * update one update related to sign in user
 */
export const updateUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            id: req.body.productId,
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    });
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates];
    }, []);
    const match = updates.find(update => update.id == req.params.id);
    if (!match) {
        res.status(404);
        res.json({ message: "this update isn't exist for this user and product" });
        return;
    }

    const updateItem = await prisma.update.update({
        where: {
            id: req.params.id,
        },
        data: {
            title: req.body.title,
            body: req.body.body
        }
    });
    res.status(200);
    res.json({ data: updateItem });
}
/**
 * delete update related to sign in user
 */
export const deleteUpdate = async (req, res) => {
    const products = await prisma.product.findMany({
        where: {
            id: req.body.productId,
            belongsToId: req.user.id
        },
        include: {
            updates: true
        }
    });
    const updates = products.reduce((allUpdates, product) => {
        return [...allUpdates, ...product.updates];
    }, []);
    const match = updates.find(update => update.id == req.params.id);
    if (!match) {
        res.status(404);
        res.json({ message: "this update isn't exist for this user and product" });
        return;
    }

    const deleted = await prisma.update.delete({
        where: {
            id: req.params.id,
        }
    });
    res.status(200);
    res.json({ data: deleted });
}