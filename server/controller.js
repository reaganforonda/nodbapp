const axios = require('axios');
const API_KEY = require('../files/files');
const BASE_URL = 'https://api.openweathermap.org/data/2.5'




let weather = [];
let weatherSearch = [];
let id = 0;

let weatherData = [];


module.exports = {

    read : (req, res) =>{
        res.status(200).send(weather);
    },

    readWeather : (req, res) => {
        axios.get(`${BASE_URL}/weather/?zip=${req.params.zip},us&mode=JSON&units=imperial&APPID=${API_KEY}`).then((result) => {
            weatherSearch = result.data;
            res.status(200).send(weatherSearch);            
        }).catch((e) => console.log(e));

    },

    readWeatherGeo: (req, res) => {
        let lat = parseFloat(req.params.lat);
        let lon = parseFloat(req.params.lon);

        axios.get(`${BASE_URL}/weather/?lat=${lat}&lon=${lon}&mode=JSON&units=imperial&APPID=${API_KEY}`).then((result) => {
            weatherSearch = result.data;
            res.status(200).send(weatherSearch); 
        }).catch((e) => console.log(e));

    },

    add : (req, res) => {
        let weatherObj = {
            id : id,
            currentLocation : req.body.currentLocation,
            date : req.body.date,
            temp : req.body.temp,
            description : req.body.description,
            icon : req.body.icon
        }
        weather.push(weatherObj);
        id+=1;

        res.status(200).send(weather);
    },

    delete : (req, res) => {
        let i = null;

        weather.forEach((val, index) => {
            if(val.id === Number(req.params.id)){
                i = index;
            }
        });

        weather.splice(i, 1);

        res.status(200).send(weather);
    },


    update: (req, res) => {
        let oldIndex = 0;
        let newIndex = 0;

        // Find Index of Weather Object that you want to move
        weather.forEach((obj, index) => {
            if(obj.id === Number(req.params.id)){
                oldIndex = index;
            }
        })

        

        // Moving 'up' = Moving to the front of the array
        // Moving 'down' = Moving to the back of the array
        if(req.params.move === 'up'){
            newIndex = oldIndex-1;
            
        } else if(req.params.move === 'down'){
            newIndex = oldIndex + 1;
        }
    
        while(oldIndex < 0){
            oldIndex += weather.length;
        }
        while(newIndex < 0){
            newIndex += weather.length;
        }
    
        // If you're moving the last item in the weather array down, it will cause an error
        // To compenseate, return the last item to the front of the array by subtracting the length of the array
        // From the new index = this will insure that the last item will move to the front of the list;
        if(newIndex >= weather.length){
            newIndex = newIndex - weather.length;
        }

        weather.splice(newIndex, 0, weather.splice(oldIndex, 1)[0]);
    
        res.status(200).send(weather);
    },




    readWeatherData : (req, res) => {
        axios.get(`${BASE_URL}/forecast?zip=${req.params.zip}&mode=JSON&units=imperial&APPID=${API_KEY}`).then((result) => {
            weatherData = result.data;
            res.status(200).send(weatherData);
        }).catch((e) => console.log(e));
    }

}