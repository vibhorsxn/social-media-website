const express =  require('express');

const router = express.Router();


const usersConroller = require('../controllers/users_contollers');
// userContoller. actionName-> declare in routes
 router.get('/profile', usersConroller.profile);

//  To get the admin view just declare create the file in views with user_admin.ejs
 router.get('/sign-up', usersConroller.signUp); 
 router.get('/sign-in', usersConroller.signIn); 

module.exports= router;