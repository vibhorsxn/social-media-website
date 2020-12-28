const express=require ('express');
const router= express.Router();
const homeContoller = require('../controllers/home_contoller');


console.log("Index Router Loaded...");

router.get('/',homeContoller.home); 
router.use('/users', require('./users'));

// for any other routes acces from here

// router.use('/posts', require('./post'));

module.exports= router;