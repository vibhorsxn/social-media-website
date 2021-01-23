const express =  require('express');
const router = express.Router();
const passport  = require('passport');

const postsController = require('../controllers/posts_controller');
//Putting the url check to the action level(without passing the check of authenctication)
router.post('/create',passport.checkAuthentication,postsController.create);

module.exports= router;