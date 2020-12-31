//Need to give name because it is a obj ->home
// module.exports.actionName=function(req,res){}


module.exports.home = function(req,res){
    // console.log(req.cookies);
    // res.cookie('something', 23);
    return res.render('home',{
        title:"home"
    });
}

