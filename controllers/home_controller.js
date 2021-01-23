//Need to give name because it is a obj ->home
// module.exports.actionName=function(req,res){}
const Post = require('../models/post');

module.exports.home = function(req,res){
    // console.log(req.cookies);
    // res.cookie('something', 23);

    //exec: shifting the callback function in exec
Post.find({}).populate('user').exec(function(err,posts){
    return res.render('home',{
        title: "codeial | Home",
        posts: posts
    });
});

}
