import React from 'react';

function Icon(props){
    let url = '';
    switch (props.icon) {
      case '01d':
      url = 'http://openweathermap.org/img/w/01d.png'
      break;
      case '02d' : 
      url = 'http://openweathermap.org/img/w/02d.png'
      break;
      case '03d':
      url = 'http://openweathermap.org/img/w/03d.png'
      break;
      case '04d':
      url = 'http://openweathermap.org/img/w/04d.png'
      break;
      case '09d':
      url = 'http://openweathermap.org/img/w/09d.png'
      break;
      case '10d':
      url = 'http://openweathermap.org/img/w/10d.png'
      break;
      case '11d':
      url = 'http://openweathermap.org/img/w/11d.png'
      break;
      case '13d':
      url = 'http://openweathermap.org/img/w/13d.png'
      break;
      case '50d':
      url = 'http://openweathermap.org/img/w/50d.png'
      break;
      case '01n':
      url = 'http://openweathermap.org/img/w/01n.png'
      break;
      case '02n' : 
      url = 'http://openweathermap.org/img/w/02n.png'
      break;
      case '03n':
      url = 'http://openweathermap.org/img/w/03n.png'
      break;
      case '04n':
      url = 'http://openweathermap.org/img/w/04n.png'
      break;
      case '09n':
      url = 'http://openweathermap.org/img/w/09n.png'
      break;
      case '10n':
      url = 'http://openweathermap.org/img/w/10n.png'
      break;
      case '11n':
      url = 'http://openweathermap.org/img/w/11n.png'
      break;
      case '13n':
      url = 'http://openweathermap.org/img/w/13n.png'
      break;
      case '50n':
      url = 'http://openweathermap.org/img/w/50n.png'
      break;
    }

    return (
        <img src={url} alt='weather-icon'/>
    )
}

export default Icon;