const axios = require('axios');
const API_KEY = require('../files/files');
const BASE_URL = 'https://api.openweathermap.org/data/2.5'




let weather = [];
let weatherSearch = [];
let id = 0;


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
        console.log(lat);
        console.log(lon);

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
                oldIndex === index;
            }
        })

        console.log(oldIndex);

        // If you're moving item up the list, subtract from old index
        // If you'r moving down the list, add to the old index
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
    
        if(newIndex >= weather.length){
            let k = newIndex - weather.length +1;
            while(k--){
                weather.push(undefined);
            }
        }

        weather.splice(newIndex, 0, weather.splice(oldIndex, 1)[0]);
    
        res.status(200).send(weather);
    }


}