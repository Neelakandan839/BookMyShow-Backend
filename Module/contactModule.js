const Contacts = require('../Model/Contacts');
const Joi = require('joi');

///////// create movie ///////////////////
exports.postContact = async (req,res,next)=>{
    //joi validate schema
        const schema = Joi.object({
        name: Joi.string().min(1).max(30).required(),
        email: Joi.string().required(),
        message:Joi.string().required()
    })
    // joi validate input data
    var {error} = await schema.validate(req.body);
    if(error){
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success') 
    
    ////////////////// save data in mongodb using mongoose //////////////
    const contact = new Contacts({ 
        name: req.body.name,
        email:req.body.email,
        message: req.body.message
    })
    try{
    var response=await contact.save();  
    res.send(response) 
    } catch(err){
    res.status(400).send(err)
    }
}   

///////////////// get movie //////////////////
exports.getcontact = async (req,res,next)=>{
    const response = await Contacts.find();
    res.send(response);
}
        