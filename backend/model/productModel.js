const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid")
const prisma = new PrismaClient();

async function createProduct(newProduct){
    try{
        await prisma.product.create({
            data: {
                id: uuidv4(),
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
    }
    catch (err){
        return err;
    }
}

async function createProduct(newProduct){
    try{
        await prisma.product.create({
            data: {
                id: uuidv4(),
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

        return true;
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

async function updateProduct(id){
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