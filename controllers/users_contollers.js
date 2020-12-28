// Declare the action name -> Profile function(req,res)

// module.exports.profile = function(req,res){
//     res.end("<h1>Users Profile</h1>");
// }
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
    // TODO LATER
}


// get the sign In data
module.exports.createSession=function(req,res){
    // TODO LATER
}
