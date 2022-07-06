// Import Module global
const express = require('express');
const {
    engine
} = require('express-handlebars');
const app = express();


// Config Handlebars
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');


// Route fichier static
app.use('/assets', express.static('public'))


// Router
app.get('/', function (req, res) {
    res.render('home')
})


app.get('/article', function (req, res) {
    res.render('article')
})

app.get('/biographie', function (req, res) {
    res.render('biographie')
})

app.get('/formulaire', function (req, res) {
    res.render('formulaire')
})

app.get('/inscription', function (req, res) {
    res.render('inscription')
})

app.get('/login', function (req, res) {
    res.render('login')
})

app.get('/sitepartenaire', function (req, res) {
    res.render('sitepartenaire')
})

// Run server
// app.listen(3000);
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Ecoute le port ${port}, lancé le : ${new Date().toLocaleString()}`);
});