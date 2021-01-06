// Declare the action name -> Profile function(req,res)

// module.exports.profile = function(req,res){
//     res.end("<h1>Users Profile</h1>");
// }
const { request } = require('express');
const User = require('../models/user');

module.exports.profile = function(req,res){
    if (req.cookies.user_id)
    {
       User.findById(req.cookies.user_id, function(err,user)
       {
           if(user)
           {
               return res.render('user_profile', 
               {
                   title:"User profile",
                   user: user
               })
           }
           else
            {
               return res.redirect('/users/sign-in'); //Async awake
            }
       });
    }
    else
    {
        return res.redirect('/users/sign-in')
    }
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

    //steps to authentication

    //find the user
    User.findOne({email:req.body.email}, function(err,user){
        if(err){console.log('error in creating user while signing In'); return}
        //handle user found
        if(user){
            
            //handle passswords which don't match
            if(user.password != req.body.password){
                return res.redirect('back');
            }

            //handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
        }else{
            //handle user not found
            return res.redirect('back');

        }
    });
    
}
