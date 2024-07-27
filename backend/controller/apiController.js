const express = require("express");
const router = express.Router();
const model = require("../model/productModel");
const ai = require("../helper/ai/gemini");
const Function = require("../helper/function");
const Grade = require("../helper/grade/grade");

router.get('/',async (req,res)=>{
    const search = req.query.search;

    if(search === undefined){
        const product = await model.getProductByName(search);
        const respond = {
            message: "success",
            data: product
        }
        return res.status(200).json(respond);
    }

    const productList = await model.getAllProduct();
    const respond = {
        message: "success",
        data: productList
    }
    return res.status(200).json(respond);
});

router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    const product = await model.getProductById(id);
    const respond = {
        message: "success",
        data: product
    }
    return res.status(200).json(respond);
});

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
            ingredient: req.body.ingredient,
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

router.post('/generate/ingredient-nutriscore',async (req,res)=>{
    try{
        const name = req.body.name

        const generatedData = await ai.generateIngredientNutrition(name)
        const gradeData = Grade.generateContent(generatedData)

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

module.exports = router;