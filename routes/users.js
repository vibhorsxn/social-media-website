// const express =  require('express');
// const router = express.Router();
// const passport = require('passport');


// const usersController = require('../controllers/users_controller');
// // userContoller. actionName-> declare in routes
//  router.get('/profile',passport.checkAuthentication, usersController.profile);

// //  To get the admin view just declare create the file in views with user_admin.ejs
//  router.get('/sign-up', usersController.signUp); 
//  router.get('/sign-in', usersController.signIn); 

//  router.post('/create',usersController.create);
//  //router.post('/create-session',usersController.createSession);

//  //use passport as a middle ware to auth
//  router.post('/create-session',passport.authenticate(
//      'local',
//      {failureRedirect: '/users/sign-in'}
//  ),usersController.createSession);




// module.exports= router;
const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile', passport.checkAuthentication, usersController.profile);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), usersController.createSession);

router.get('/sign-out', usersController.destroySession);

module.exports = router;