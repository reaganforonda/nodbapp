// Required
const express = require('express');
const bodyParser = require('body-parser');
const cont = require('./controller.js');
const cors = require('cors');
const port = 3002;
const app = express();

// Top-level middleware
app.use(bodyParser.json());
app.use(cors());


// Endpoints-Internal Server
app.get('/api/weather', cont.read)
app.post('/api/weather', cont.add)
app.put('/api/weather/:id/:move', cont.update)
app.delete('/api/weather/:id', cont.delete)


// Endpoints - External API
app.get('/api/database/:zip', cont.readWeather)
app.get('/api/geo/:lat/:lon', cont.readWeatherGeo)
app.get('/api/forecast/:zip', cont.readWeatherData)

app.listen(port, ()=> {
    console.log(`Creepin on Port: ${port}`);
})