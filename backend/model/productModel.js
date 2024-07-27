const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid")
const prisma = new PrismaClient();

async function createProduct(newProduct){
    const id = uuidv4();
    try{
        await prisma.product.create({
            data: {
                id: id,
                name: newProduct.name,
                type: newProduct.type,
                price: newProduct.price,
                image: newProduct.image,
                description: newProduct.description,
                score: newProduct.score,
                grade: newProduct.grade,
                nutrition: newProduct.nutrition,
                ingredient: newProduct.ingredient,
            }
        });
        return id;
    }
    catch (err){
        return err;
    }
}


async function getAllProduct(){
    try{
        const productList = await prisma.product.findMany();
        return productList;
    }
    catch (err){
        return err;
    }
}

async function getProductById(id){
    try{
        const product = await prisma.product.findMany({
            where: {id:id}
        });
        return product;
    }
    catch (err){
        return err;
    }
}

async function updateProduct(id,product){
    try{
        await prisma.product.update({
            where: {id:id},
            data: {
                name: product.name,
                type: product.type,
                price: product.price,
                image: product.image,
                description: product.description,
                score: product.score,
                grade: product.grade,
                nutrition: product.nutrition,
                ingredient: product.ingredient,
            }
        });
        return id;
    }
    catch (err){
        return err;
    }
}

module.exports = {createProduct,getAllProduct,getProductById,updateProduct};