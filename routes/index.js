const express=require ('express');
const router= express.Router();
const homeController = require('../controllers/home_controller');


console.log("Index Router Loaded...");

router.get('/',homeController.home); 
router.use('/users', require('./users'));

// for any other routes acces from here

// router.use('/posts', require('./post'));

module.exports= router;