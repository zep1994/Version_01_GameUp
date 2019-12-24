// Load Modules
const express = require('express')
const app = express()

const hostname = "127.0.0.1";
const port = 8000;

const path = require('path');

//IMPORT MODULES
let wiki = require('./routes/route')


//set Engine for EJS
app.set('view engine', 'ejs')

//Setup access to public folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/wiki', wiki)

app.get('/new', (req, res) => {
   res.render('coach/new.ejs')
})

app.get('/coach', (req, res) => {
   res.render('coach/coach.ejs')
})

//HOME PAGE
app.get('/home', (req, res) => {
   res.render('home.ejs')
})

// LANDING PAGE
app.get('/', (req, res) => {   
   // Send the response body "Hello World"
   res.render('index.ejs');
});

// Prints a log once the server starts listening
app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})