import express from "express";
import mongoose from "mongoose";
import actions from './controllers/actions.js'
const  app  = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const mongo_url = "mongodb+srv://TuriWael:30z3OsRDgHTmfIT1@cluster0.0qkhbet.mongodb.net/?retryWrites=true&w=majority";

const port = 3001;
app.use('/api',port);

mongoose.connect(mongo_url)
.then(results =>{
    console.log(results);
})
.catch(error => {
    console.log(error);
})

app.listen(port,function(){
    console.log(`Server is running via port ${port}`);

})