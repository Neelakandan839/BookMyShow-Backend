const express = require('express');
const router=express.Router();
const contactModule=require('../Module/contactModule');

router.post('/savecontact',contactModule.postContact);
router.get('/getcontact',contactModule.getcontact);

module.exports = router; 