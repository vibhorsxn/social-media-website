const express= require('express');
const cookieParser = require('cookie-parser');
const app= express();
// on production level the PORT is used is 80
const port =8000;
// require the express layouts
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//Used for authentication cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
// const { Cookie } = require('express-session');
const MongoStore = require('connect-mongo')(session);
// Using SASS
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css'


}));

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));
//use expressLayouts
app.use(expressLayouts);
//Extract style and scripts from sub pages onto the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//mongostore is used to store the session cookie in the db
app.use(session({
    name:'codeial',
    //TODO change the secret before using it in the production mode
    secret: 'blahsomething',
    saveUninitialized:false, //when their is req whichis not intialized, asession when the user is not logged in
    resave: false, //some sort of session data is present stored, don't want to resave 
    Cookie: {
        maxAge:(1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection:db,
            autoRemove:'disabled'   
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// use express router
app.use('/', require('./routes') );

app.listen(port,function(err){
    if(err){
        // console.log('Error',err);
        console.log(`Error in running the server:${err}`); //String interpolation
    }

    console.log(`Server is UP! and running on PORT ${port}`);

}); 
