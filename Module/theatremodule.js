const Theatre = require('../Model/Theatre');
const Joi = require('joi');

///////// create movie ///////////////////
exports.posttheatre = async (req,res,next)=>{
    //joi validate schema
        const schema = Joi.object({
        name: Joi.string().min(1).max(30).required(),
        address: Joi.string().required(),
    })
    // joi validate input data
    var {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
    
    ////////////////// save data in mongodb using mongoose //////////////
    const theatre = new Theatre({ 
        name: req.body.name,
        address: req.body.address, 
    })
    try{
    var response=await theatre.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}

///////////////// get movie //////////////////
exports.gettheatre = async (req,res,next)=>{
    const response = await Theatre.find();
    res.send(response);
}
 
////////// update theatre name & address ///////////////
exports.updatetheatre = async (req,res,next)=>{
    const {theatreId} = req.params;   // object destructure
    const response = await Theatre.findByIdAndUpdate(theatreId,{
        name:req.body.name, 
        address:req.body.address
    });
    res.send(response);  
}

////////// delete theatre ///////////////
exports.deletetheatre = async (req,res,next)=>{  
    const {theatreId} = req.params;   // object destructure
    const response = await Theatre.findByIdAndRemove(theatreId)
    res.send(response);
}