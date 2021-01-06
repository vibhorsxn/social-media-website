const express =  require('express');

const router = express.Router();


const usersController = require('../controllers/users_controller');
// userContoller. actionName-> declare in routes
 router.get('/profile', usersController.profile);

//  To get the admin view just declare create the file in views with user_admin.ejs
 router.get('/sign-up', usersController.signUp); 
 router.get('/sign-in', usersController.signIn); 

 router.post('/create',usersController.create);
 router.post('/create-session',usersController.createSession);

module.exports= router;