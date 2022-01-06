// const jwt = require('jsonwebtoken');

// exports.AuthorizeUser = async (req,res,next)=>{
//     // check weather token exixts
//     if(req.headers['token']) return res.status(401).send({msg:'Unauthorised'});

// // verify token
//     try{
//         req.body.user = await jwt.verify(req.headers['token'],'SWERA');
//         Next();
//     } catch(err){
//         res.send(err);
//     }
// }

// exports.isAdmin = async(req,res,next) => {
//     if(req.body.user.existuser.type == 'Admin'){
//     next();
//     }else{
//         res.status(403).send({msg:'You are not Admin'});
//     }
// }