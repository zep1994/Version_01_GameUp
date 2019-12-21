// Load HTTP module
const express = require('express')
const app = express()

const hostname = "127.0.0.1";
const port = 8000;

//IMPORT MODULES
let wiki = require('./routes/route')

app.use('/wiki', wiki)

// Create HTTP server 
app.get('/', (req, res) => {   
   // Send the response body "Hello World"
   res.get('./views/index.html');
});

// Prints a log once the server starts listening
app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})