const express = require('express');
const path = require('path');
const port = 8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get("/",function(req,res){
    // res.send('<h1>So it is working woohooo</h1>');
    return res.render('home',{title: "i am awesome"});
});
app.listen(port, function(err){
    if(err){
        console.log("Error occured",err);
    }
    console.log('Running on port: '.port);
});
