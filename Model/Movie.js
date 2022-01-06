const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name :{
        type:String,
        required:true,
        minlength:1,
        maxlength:30
    },
    pic:{
        type:String,
        required:true
    },
    certificate:{
        type:String,
        maxlength:5,
        required:true
    },
    language:{
        type:String,
        maxlength:40            
    }
})

const Movie = mongoose.model('movie',movieSchema,'movieCollection');
module.exports = Movie;