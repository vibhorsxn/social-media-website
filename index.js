const express= require('express');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const app= express();
// on production level the PORT is used is 80
const port =8000;
// require the express layouts
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');


app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));
//use expressLayouts
app.use(expressLayouts);
//Extract style and scripts from sub pages onto the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use('/', require('./routes') );

// Setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port,function(err){
    if(err){
        // console.log('Error',err);
        console.log(`Error in running the server:${err}`); //String interpolation
    }

    console.log(`Server is UP! and running on PORT ${port}`);

}); 
