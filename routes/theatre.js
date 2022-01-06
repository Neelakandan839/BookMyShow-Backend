const express = require('express');
const router=express.Router();
const theatreModule=require('../Module/theatremodule');

router.post('/savetheatre',theatreModule.posttheatre);
router.get('/gettheatre',theatreModule.gettheatre);
router.patch('/updatetheatre/:theatreId',theatreModule.updatetheatre);
router.delete('/deletetheatre/:theatreId',theatreModule.deletetheatre);

module.exports = router;