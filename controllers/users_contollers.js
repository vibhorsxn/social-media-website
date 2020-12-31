// Declare the action name -> Profile function(req,res)

// module.exports.profile = function(req,res){
//     res.end("<h1>Users Profile</h1>");
// }
const { request } = require('express');
const User = require('../models/user');

module.exports.profile = function(req,res){
    return res.render('user_profile',{
        title:"profile"
    });
}
// Declare the action name -> signUp function(req,res)

//Render the Sign Up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}
//Render the Sign In page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create =function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email} , function(err,user){
        if(err){console.log('error in finding user in signing up'); return}

        if(!user){
            User.create(req.body, function(err,user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        } else{
            return res.redirect('back');
        }
    });

    
}


// get the sign In data
module.exports.createSession=function(req,res){
    // TODO LATER
}
