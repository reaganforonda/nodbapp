import React from "react";
import "./CSS/reset.css";
import "./CSS/weather.css";
import Icon from './Icon';

function Weather(props) {
  let seconds = props.date;
  let date = new Date(seconds * 1000);
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();

  let main = props.main.map((val, i) => {
    return (
      <div key={val + i}>
        <p>Temperature: {val.temp} &#8457;</p>
        <p>Temperature-Min : {val.temp_min} &#8457;</p>
        <p>Temperature-Max : {val.temp_max} &#8457;</p>
        <p>Humidity: {val.humidity}%</p>
      </div>
    );
  });

  let weather = props.wind.map((val, i) => {
    return (
      <div key={val + i}>
        <p>Wind: {val.speed} MPH</p>
      </div>
    );
  });

  let condition = props.weather.map((val, i) => {
      return (
          <div key={val+i}>
          <p className='descrip'>{val.description}</p>
          <Icon icon={val.icon}/>
          {/* ÷<img src={getWeatherIcon(val.icon)} alt='weather-icon'/> */}
          </div>
      );
  });


  return (
    <div className='weather-comp'>
      <h2>{props.currentLocation}</h2>
      <p>
        {dateString} {timeString}
      </p>
      <div className='weather-card'>
      {condition}
        {main}
        {weather}
      </div>
    </div>
  );
}

export default Weather;
