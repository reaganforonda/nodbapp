import React, { Component } from "react";
import axios from "axios";
import "./CSS/reset.css";
import "./CSS/display.css";
import Weather from "./Weather";

import Tracked from './Tracked';
import Button from './Button';

export default class Display extends Component {
  constructor() {
    super();

    this.state = {
      location: "",
      currentSelection: [],
      weather: [],
      main: [],
      currentLocation: "",
      date: "",
      wind: [],
      show: false,
      trackedWeather: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.deleteFromTracking = this.deleteFromTracking.bind(this);
    this.addToTracking = this.addToTracking.bind(this);
    this.deleteFromList = this.deleteFromList.bind(this);
    this.moveListAround = this.moveListAround.bind(this);
    this.converUTC = this.converUTC.bind(this);
  }

  componentDidMount() {
    this.setState({ show: false });
  }

  handleInputChange(e) {
    this.setState({ location: e.target.value });
  }

  getWeather() {
    let temp = [];
    let temp2 = [];
    axios
      .get(`http://localhost:3002/api/database/${encodeURI(this.state.location)}`)
      .then(result => {
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

  handleOnClick() {
    this.getWeather();
    this.setState({ location: "" });
    this.setState({ show: true });
  }

  addToTracking() {
    let weatherObj = {
      currentLocation: this.state.currentLocation,
      date: this.state.date,
      temp: this.state.main[0].temp,
      description : this.state.weather[0].description,
      icon : this.state.weather[0].icon
    };

    axios.post(`http://localhost:3002/api/weather`, weatherObj).then(result => {
      let temp = result.data;
      this.setState({ trackedWeather: temp });
    });
  }

  deleteFromTracking(id) {
    axios.delete(`http://localhost:3002/api/weather/${id}`).then(result => {
      let temp = result.data;
      this.setState({ trackedWeather: temp });
    });
  }

  moveListAround(id, move) {
    axios
      .put(`http://localhost:3002/api/weather/${id}/${move}`)
      .then(result => {
        let temp = result.data;
        this.setState({ trackedWeather: temp });
      });
  }

  deleteFromList(id) {
    axios.delete(`http://localhost:3002/api/weather/${id}`).then(result => {
      let temp = result.data;
      this.setState({ trackedWeather: temp });
    });
  }

  converUTC(utc) {
    let seconds = utc;
    let date = new Date(seconds * 1000);
    let dateString = date.toLocaleDateString();
    let timeString = date.toLocaleTimeString();

    return `${dateString} ${timeString}`;
  }

  render() {
    return (
      <div>
        <div className="search-section">
          <input
            className="search-input"
            value = {this.state.location}
            placeholder="Enter Zip Code"
            onChange={e => this.handleInputChange(e)}
          />
          <div><Button cssClass={'search-button'} onclick={this.handleOnClick} title={'SEARCH'}/></div>
        </div>

        <div className="current-temp">
          {this.state.show && (
            <Weather
              wind={this.state.wind}
              date={this.state.date}
              currentLocation={this.state.currentLocation}
              main={this.state.main}
              weather={this.state.weather}
            />
          )}
        </div>
        <div>
          {this.state.show && (<div><Button onclick={this.addToTracking} cssClass={'track-button'} title={'TRACK'}></Button></div>)}
        </div>
        <div className="tracking-list-items">
          <Tracked tracked={this.state.trackedWeather} delete={this.deleteFromList} move={this.moveListAround} convert={this.converUTC}/>
        </div>
      </div>
    );
  }
}
