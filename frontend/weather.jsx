import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null };
    this.getWeather = this.getWeather.bind(this);
  }

  render() {
    let content = <div></div>;
    if (this.state.weather) {
      let temperature = this.state.weather.main.temp;
      temperature = (temperature * (9/5)) - 459.67;
      temperature = temperature.toFixed(1);
      content = <div>
        <span>City: {this.state.weather.name}</span>
        <span>Temperature: {temperature} degrees</span>

      </div>;
    }
    return (
      <div className="weather">
        <span>Weather</span>
        {content}

      </div>
    );
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location){
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    let url = "http://api.openweathermap.org/data/2.5/weather";
    url += `?lat=${lat}&lon=${lon}`;
    const api = 'a0773f72cc05a38b29232cd804c716ee';
    url += `&APPID=${api}`;
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState === XMLHttpRequest.DONE &&
        xmlhttp.status === 200) {
          const data = JSON.parse(xmlhttp.responseText);
          this.setState({weather: data});
          console.log(data);
        }
      };

    xmlhttp.open("GET",url, true);
    xmlhttp.send();
  }
}

export default Weather;
