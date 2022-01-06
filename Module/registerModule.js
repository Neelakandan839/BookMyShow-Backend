const User = require('../Model/User');
const joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req,res,next) =>{

    const Schema= joi.object({
        type:joi.string().required(),
        username:joi.string().min(1).max(30).required(),
        name:joi.string().min(1).max(30).required(),
        email:joi.string().required(),
        phone:joi.string().min(10).max(10).required(),
        password:joi.string().min(5).max(10).required()
    })
    
    // joi validate
    var {error} = await Schema.validate(req.body); 
    if(error){
        console.log(error)
        return res.status(400).send({msg:error.details[0].message})
    }
    res.send('success')
  
    var existUser = await User.findOne({email:req.body.email}).exec();
    if(existUser) return res.status(400).send({msg:"Email Already Exists"});

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password,salt)

    // save in mangodb
    const user= new User({
        type:req.body.type,
        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password
    })
    try {
        var response = await user.save();
        res.send(response)
    } catch (err) {
        res.status(400).send(err)
    } 
}

exports.login = async (req,res,next)=>{
    // User Input Validation - Joi Validation
    const schema = joi.object({ 
        type:joi.string().required(),
        email:joi.string().min(6).max(50).email().required(),
        password:joi.string().min(8).max(15).required()
    })
    var {error} = await schema.validate(req.body);
    if (error) return res.status(400).send({msg:error.details[0].message})

    // is registered user
    var existUser = await User.findOne({email:req.body.email}).exec();
    if (!existUser) return res.status(400).send({msg:"Email not registered"});
    
    // password compare check
    const isValid = await bcrypt.compare(req.body.password,existUser.password);
    if(!isValid) return res.status(400).send({msg:"Password doesn't match"});

    // Generate Token 
    var token = jwt.sign({existUser}, 'SWERA', {expiresIn:'1h'});  
    res.send(token);
}
