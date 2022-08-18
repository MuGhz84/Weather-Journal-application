// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* adding the dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

// Port used
const port = 3000;

// Start the server
const server = app.listen(port, listeningDebug);
// Debug-code Adding console.log() to the server callback function
function listeningDebug(){
    console.log("Server is up and rnning on the Localhost...");
    console.log(`...Server is listening at port number:[${port}]`);
    console.log(`.................Please visit http://localhost:${port}`);
}

// a GET route that returns the projectData object
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

app.get('/all', serveAGET);
function serveAGET(req, res) {
    console.log(req.url, req.method);
    console.log(projectData);
    if(Object.keys(projectData).length === 0) {
        console.log("empty...first every visit");
        theEmptyEntry = {
            temperature: "Today...",
            date: newDate,
            userResponse: "...is a cool day, its our first day online, and you are our first visitor ^_^. Unfortunately our database is empty, come visit us after a 100 year maybe we will have something to serve you with."
        }
        res.send(theEmptyEntry);
    } else {
        console.log("not empty...send");
        res.send(projectData);
    }
    
}

//a POST route that adds incoming data to projectData object
app.post('/add', servePOSTToHomePage);
function servePOSTToHomePage(req, res) {
    //const incomingData = req.body;
    
    theNewEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }

    Object.assign(projectData, theNewEntry);
    console.log(req.url, req.method);
    console.log(projectData);
    res.send(projectData);
}