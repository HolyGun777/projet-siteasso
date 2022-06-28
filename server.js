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

app.get('/accueil', function (req, res) {
    res.render('accueil')
})
app.get('/article', function (req, res) {
    res.render('article')
})

app.get('/ecole-du-mans', function (req, res) {
    res.render('ecole-du-mans')
})

app.get('/formulaire', function (req, res) {
    res.render('formulaire')
})

app.get('/login', function (req, res) {
    res.render('login')
})
// Run server
app.listen(3000);