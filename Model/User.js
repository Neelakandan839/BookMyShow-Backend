const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    type:{
        type:String,
        enum:['Admin','User'],
        required:true
    },
    username:{
        type:String,
        minLength:1,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{ 
        type:String,
        required:true
    }, 
    phone:{
        type:Number,
        required:true,
        minLength:10  
    },
    password:{
        type:String,    
        required:true,
        minLength:8  
    }    
}) 

const Usermodel = mongoose.model('Usermodel',userSchema,'user')
module.exports = Usermodel;

