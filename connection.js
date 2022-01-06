const mongoose = require("mongoose");

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://NK:nk123@cluster0.onale.mongodb.net/Movies?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
    }catch(err){
        console.log(err)
        process.exit()
    }
}