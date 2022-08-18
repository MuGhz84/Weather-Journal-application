# Weather-Journal App Project



## Table of Contents

* [Overview](#Overview)
* [Instructions](#instructions)
* [Extras](#Extras)
* [Description](#description).
* [Dependencies](#dependencies).
* [Installation](#installation).
* [How To / code reference...](#How-To-...).


## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Description

- The project meets all specifications and requirements listed on the   Weather-Journal project rubric inclusing the Project Environment Setup, APIs and Routes, and the Dynamic UI.


## Dependencies
- Express.
- body-parser
- cors

## Installation
- Afetr the evironmental setup, Please visit http://localhost:3000 .
## How To ...
- The code in the functions `app.get('/all', serveAGET)` and `app.post('/add', servePOSTToHomePage)` in the server.js file set up the GET and POST routes respectively.

- function names is self-explanatory..... e.g., 
- `makeGETRequestGetJson`, is a helper function to build the API-URL with api-credentials, zip-code, and country name. However, and for now, the country is default to the USA. In addition, this function sets the units in the api call to METRIC.
- `makeGETRequestGetJson = async (arg1)` make a "GET" request to the [arg1] URL, however, parses the response into JSON.
- `generateAction` is a callback function that execute when the button element [id: generate] is clicked.
- `synthesizeData` is a helper function encapsulating the 'short' code necessary for extracting the necessary data [the temperature] from the OpenWeatherMap web-api response.
-`makePost = async (arg1, arg2)` make a "POST" request to the app [arg1] URL, and send the object [arg2] in the request body.
-`updateUI` updates the UI dynamically.
- The user is asked to enter a valid zip-code, and his/her user response `IF these two fields were left empty` via an alert message.