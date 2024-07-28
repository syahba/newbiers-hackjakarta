const express = require("express");
const router = express.Router();
const model = require("../model/productModel");
const ai = require("../helper/ai/gemini");
const Function = require("../helper/function");
const Grade = require("../helper/grade/grade");

// GET
router.get('/',async (req,res)=>{
    const search = req.query.search;

    if(search !== undefined){
        const product = await model.getProductByName(search);
 
        const data = product.map(element => {
            let ingredients = element.ingredient 
            delete element.ingredient
            return {
                ...element,
                grade_detail: Function.getGrade(element.grade, element.type),
                ingredients: ingredients
            }
        })
        const respond = {
            message: "success",
            data: data
        }
        return res.status(200).json(respond);
    }

    const productList = await model.getAllProduct();
    const data = productList.map(element => {
        let ingredients = element.ingredient 
        delete element.ingredient
        return {
            ...element,
            grade_detail: Function.getGrade(element.grade, element.type),
            ingredients: ingredients
        }
    })
    const respond = {
        message: "success",
        data: data
    }

    return res.status(200).json(respond);
});

router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    const product = await model.getProductById(id);
    
    if(product === null){
        return res.status(404).json({message:"Product Not Found"});
    }
    product.grade_detail = Function.getGrade(product.grade, product.type)
    product.ingredients = product.ingredient
    delete product.ingredient
    const respond = {
        message: "success",
        data: product
    }
    return res.status(200).json(respond);
});

// POST
router.post('/',async (req,res)=>{
    try{
        const product = {
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            score: req.body.score,
            grade: req.body.grade,
            nutrition: req.body.nutrition,
            ingredient: req.body.ingredients,
        }
        const insertToDatabase = await model.createProduct(product);
        const respond = {
            message:"success",
            data:{
                id:insertToDatabase
            }
        }
        return res.status(201).json(respond);
    }
    catch (err){
        return res.status(500).json({message:"something went wrong",error:err});
    }
});

// PUT
router.put('/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const product = {
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            score: req.body.score,
            grade: req.body.grade,
            nutrition: req.body.nutrition,
            ingredient: req.body.ingredient,
        }
        const insertToDatabase = await model.updateProduct(id,product);
        const respond = {
            message:"success",
            data:{
                id:insertToDatabase
            }
        }
        return res.status(201).json(respond);
    }
    catch (err){
        return res.status(500).json({message:"something went wrong",error:err});
    }
});


router.post('/generate/ingredient-nutriscore',async (req,res)=>{
    try{
        const name = req.body.name

        const generatedData = await ai.generateIngredientNutrition(name)
        const gradeData = Grade.generateContent(generatedData.type, generatedData.nutrition)

        const respond = {
            message:"success",
            data: {
                score: gradeData.score,
                type: generatedData.type,
                grade: gradeData.grade,
                grade_detail: Function.getGrade(gradeData.grade, generatedData.type),
                nutrition: generatedData.nutrition ?? {},
                ingredients: generatedData.ingredient ?? []
            }
        }
        return res.status(200).json(respond);
    }
    catch (err){
        return res.status(500).json({message:"something went wrong",error:err});
    }
});

router.post('/generate/nutriscore',async (req,res)=>{
    try{
        const type = req.body.type
        const ingredients = req.body.ingredients

        const nutritionData = await ai.generateNutrition(ingredients)
        const gradeData = Grade.generateContent(type, nutritionData.nutrition)

        const respond = {
            message:"success",
            data: {
                score: gradeData.score,
                type: type,
                grade: gradeData.grade,
                grade_detail: Function.getGrade(gradeData.grade, type),
                nutrition: nutritionData.nutrition ?? {},
                ingredients: ingredients ?? []
            }
        }
        return res.status(200).json(respond);
    }
    catch (err){
        return res.status(500).json({message:"something went wrong",error:err});
    }
});

module.exports = router;