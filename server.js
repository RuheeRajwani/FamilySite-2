// server.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path')

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'))

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
    res.render('pages/index');
});

// about page 
/*app.get('/ahil.html', function(req, res) {
    let menu = getMenu();
    var menuAhil = tasks.map(function (menuItem, index, array) {
        if (menuItem.id == 'ahil') 
            menuItem.isSelected = true;
        return  menuItem;
    });
    res.render('pages/ahil', { menu: menuAhil});
});*/
app.get('/index.html', function (req, res) {
    res.render('pages/index');
});
app.get('/asif.html', function (req, res) {
    res.render('pages/asif');
});
app.get('/contactUs.html', function (req, res) {
    res.render('pages/contactUs');
});
app.get('/grandparents.html', function (req, res) {
    res.render('pages/grandparents');
});
app.get('/laila.html', function (req, res) {
    res.render('pages/laila');
});
app.get('/ruhee.html', function (req, res) {
    res.render('pages/ruhee');
});
app.get('/vacation.html', function (req, res) {
    res.render('pages/vacation');
});


app.get('/ahil.html', function (req, res) {
    res.render('pages/ahil');
});
app.listen(8080);
console.log('8080 is the magic port');

/*const getMenu = () => {
  let  menu = [
      {id: "ahil", href:"pages/ahil", display: "Ahil", isSelected:false},
      {id: "asif", href:"pages/asif", display: "Asif", isSelected:false},
      {id: "contactUs", href:"pages/contactUs", display: "Contact Us", isSelected:false},
    {id: "grandparents", href:"pages/grandparents", display: "Grandparents", isSelected:false},
    {id: "index", href:"pages/index", display: "Home", isSelected:false},
    {id: "laila", href:"pages/laila", display: "Laila", isSelected:false},
    {id: "ruhee", href:"pages/ruhee", display: "Ruhee", isSelected:false},
    {id: "vacation", href:"pages/vacation", display: "Vacation", isSelected:false},

    


  ]


}*/