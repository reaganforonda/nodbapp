import React, { Component } from "react";
import axios from 'axios';



export default class Geolocation extends Component {
  constructor() {
    super();

    this.state = {
      lon: "",
      lat: "",
      weather: [],
      main: [],
      currentLocation: "",
      date: "",
      wind: [],
      show: true,
      geoEnabled: null
    };

    this.statics={
        oldLat : 40.2338,
        oldLon : -111.6585
    }


    this.checkGeolocation = this.checkGeolocation.bind(this);
    this.getWeatherGeo = this.getWeatherGeo.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  componentDidMount() {
    this.checkGeolocation();
    this.getLocation();
    this.getWeatherGeo();
  }

  checkGeolocation() {
    if ("geolocation" in navigator) {
        this.setState({geoEnabled : true});
    } else {
        this.setState({geoEnabled : false});
      this.setState({ show: false });
      alert("Geolocation is not supported in your browser");
    }
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition(position => {
        this.setState({lon: position.coords.longitude,lat: position.coords.latitude});
  })}

  getWeatherGeo() {
    let temp = [];
    let temp2 = [];
    let lat = '';
    let lon = '';
    if(this.state.lat === '' || this.state.lon === ''){
        lon = this.statics.oldLon;
        lat = this.statics.oldLat;
    } else{
        lat = this.state.lat;
        lon = this.state.lon;
    }

    axios.get(`http://localhost:3002/api/geo/${lat}/${lon}`).then(result => {
        temp.push(result.data.main);
        temp2.push(result.data.wind);
        this.setState({
          weather: result.data.weather,
          main: temp,
          currentLocation: result.data.name,
          date: result.data.dt,
          wind: temp2
        });
      });
  }

  render() {

    let temp = this.state.main.map((val, i)  => {
        return (
            <div key={val+i} className='header-temp-loc'>
            {val.temp} &#8457;
            </div>
        )
    })
    return (
        <div className='header-temp-loc'>
            {this.state.currentLocation}: {temp}
        </div>
    )
  }
}
