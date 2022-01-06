const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const theatreSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    address:{
        type:String,
        required:true  
    }
})

const Theatre =mongoose.model('theatre',theatreSchema,'theatreCollection');
module.exports= Theatre;