//Need to give name because it is a obj ->home
// module.exports.actionName=function(req,res){}


module.exports.home = function(req,res){
    return res.render('home',{
        title:"home"
    });
}

