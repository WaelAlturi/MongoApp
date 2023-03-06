import  express from "express";
const Router = express.Router();
import mongoose from "mongoose";

import Category from "../models/category.js";

Router.get('/getCteagories',async(req,res) => {

    const categories = await Category.find();

    res.status(200).json({

        categories: categories
    })
})

Router.post('/createNewCategory',async(req,res) => {
    //Create Object ID 
    const id = mongoose.Types.ObjectId();
    //Get data from postman
    const categoreyName = req.body.categoreyName;
    //Create new document in Category collection
    const _categorey = new Category({
        _id: id ,
        categoreyName: categoreyName
    })
    _categorey.save()
    .then( result =>{
        return res.status(200).json({
            result: result
        })
    })
    .catch(error => {console.log(error)})
})

export default Router;
