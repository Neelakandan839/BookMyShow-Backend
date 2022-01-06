const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true  
    }
})

const Contacts =mongoose.model('contact',contactSchema,'contactCollection');
module.exports= Contacts;