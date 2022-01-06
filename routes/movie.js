const express = require('express');
const router=express.Router();
const movieModule=require('../Module/movieModule')

router.post('/savemovie',movieModule.postmovie)
router.get('/getmovie',movieModule.getmovie)
router.patch('/updatemovie/:movieId',movieModule.updatemovie)
router.delete('/deletemovie/:movieId',movieModule.deletemovie)

module.exports = router;