const express=require ('express');
const router= express.Router();
const homeController = require('../controllers/home_controller');


console.log("Index Router Loaded...");

router.get('/',homeController.home); 
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));

// for any other routes access from here

// router.use('/posts', require('./post'));

module.exports= router;