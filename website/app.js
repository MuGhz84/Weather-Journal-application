/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '49357a25f367b25d0d098dbdbb8a9e76';


/**
 * Helper function to build the API-URL with api-credentials,
 *  zip-code, and country name.
 * 
 * For now, the country is default to the USA
 * 
 * also this function sets the units in the api call to METRIC
 * 
 * */
 function buildAPIURL(zipCode, /*country,*/ apiKey) {
    //const String = `${baseUrl}+zip=${zipCode},${country}&appid=${apiKey}`;
    const apiUrl = `${baseUrl}zip=${zipCode},us&units=metric&appid=${apiKey}`;
    return apiUrl;
 }


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



// make a "GET" request to ... anywhere ... parse response into JSON
const makeGETRequestGetJson = async (url = '') => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}


// Creating an event listener for the "generate" button
document.getElementById('generate').addEventListener('click', generateAction);

// a callback function to execute when "generate" button is clicked.
function generateAction(e) {
    const userZipCode = document.getElementById("zip").value;
    if (userZipCode == "") {
        alert("Please enter a valid zip code.")
        return;
        }
    const OpenWeatherMapAPIFullURL = buildAPIURL(userZipCode, apiKey);
    makeGETRequestGetJson(OpenWeatherMapAPIFullURL)
    .then(data => {
        const temp = synthesizeData(data);
        //const userResponse = checkUserInput("feelings");
        const userResponse = document.getElementById("feelings").value;
        if (userResponse == "") {
        return Promise.reject();
        }
        makePost('/add', {temperature: temp, date: newDate, userResponse: userResponse});
        
    })
    .then(updateUI())
    .catch(error => {
        alert("Please tell us how do you feel about this...")
    })
}

function synthesizeData(weatherData) {
    return weatherData.main.temp;
}


// makes a POST request sending any data, anywhere...
const makePost = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}


// Dynamically update the UI
const updateUI = async () => {
    const x = await fetch('/all');
    try {
        const data = await x.json();
        document.getElementById('date').innerHTML = data.temperature;
        document.getElementById('temp').innerHTML = data.date;
        document.getElementById('content').innerHTML = data.userResponse;
    } catch (error) {
        console.log("error", error);
    }
}