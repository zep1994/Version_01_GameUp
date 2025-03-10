// Load Modules
const express = require('express')
const app = express()

const hostname = "127.0.0.1";
const port = 8000;

const path = require('path');

//IMPORT MODULES
let wiki = require('./routes/route')
const coachesRoute = require('./routes/coaches')
const pageNotFound = require('./controller/error/404')


//set Engine for EJS
app.set('view engine', 'ejs')

//Setup access to public folder
app.use(express.static(path.join(__dirname, 'public')))


// app.get('/find-coach', (req, res) => {
//    res.render('coach/new.ejs')
// })

//HOME PAGE
app.get('/home', (req, res) => {
   res.render('home.ejs')
})

app.use(coachesRoute)



// LANDING PAGE
app.get('/', (req, res) => {   
   // Send the response body "Hello World"
   res.render('index.ejs');
});

// Prints a log once the server starts listening
app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})

app.use(pageNotFound.get404)