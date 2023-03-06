import  express from "express";
const Router = express.Router();
import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
import  jwt from "jsonwebtoken";
import Account from "../models/Account.js";

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

//AUTH FUNCTIONS 

//REGISTER
Router.post('/register',async(req,res) => {
    //Get account info from body
    const {firstName,lastName,email,password} = req.body;
    //Cheak if use (email) exist
    const isAccountExist = await Account.findOne({email:email});
    if(isAccountExist){
        return res.status(200).json({
            message: 'Account Exist'
        })
    }
    //password crypt
    const hash_password = await bcryptjs.hash(password,10);
    //create user in db
    const id = mongoose.Types.ObjectId();
    const _account = new Account({
        _id: id,
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:hash_password
    })
})
//LOGIN
Router.post('/login',async(req,res) => {})


export default Router;
