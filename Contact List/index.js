// const express = require('express');
// const path = require('path');
// const port = 7000;

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.urlencoded());
// app.use(express.static('assets'));


// var contactList = [
//     {
//         name: "Arpan",
//         phone: "1111111111"
//     },
//     {
//         name: "Tony Stark",
//         phone: "1234567890"
//     },
//     {
//         name: "Coding Ninjas",
//         phone: "12131321321"
//     }
// ]

// app.get('/practice', function(req, res){
//     return res.render('practice', {
//         title: "Let us play with ejs"
//     });
// });


// app.get('/', function(req, res){
    
//     return res.render('home',{
//         title: "Contact List",
//         contact_list: contactList
//     });
// })
// app.post('/create-contact', function(req, res){
    
    
//     contactList.push(req.body);
//     return res.redirect('/');

// });

// app.listen(port, function(err){
//     if (err) {
//         console.log("Error in running the server", err);
//     }
//     console.log('Yup!My Server is running on Port', port);
// })
const express = require('express');
const path = require('path');
const port = 7000;

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList= [
    {
        name: 'Aditya',
        phone: '9891888897'
    },
    {
        name: 'Bunty',
        phone: '1234567890'
    }
]

app.get("/",function(req,res){
    // res.send('<h1>So it is working woohooo</h1>');
    return res.render('home',{
        title: "i am awesome",
        contact_list : contactList});
});
app.post("/create-contact",function(req,res){
    contactList.push({
        name: req.body.name,
        phone: req.body.phone
    });
    return res.redirect('/');
});
app.get("/delete-contact/",function(req,res){
    let phone=req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    if(contactIndex != -1){
        contactList.splice(contactIndex,1);
    }
    return res.redirect('back');
});
app.listen(port, function(err){
    if(err){
        console.log("Error occured",err);
    }
    console.log('Running on port: ',port);
});
