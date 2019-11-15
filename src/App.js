import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      coord: {},
      weather: [],
      base: "",
      main: {},
      wind: {},
      rain: [],
      clouds: {},
      dt: 0,
      sys: {}
    };
  }
  // "$apiUrl?lon={$longitude}&lat={$latitude}"
  componentDidMount() {
    let latitude = 35;
    let longitude = 159;
    fetch(
      `https://fcc-weather-api.glitch.me//api/current?lat=${latitude}&lon=${longitude}`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          coord: responseData.coord,
          weather: responseData.weather,
          base: responseData.base,
          main: responseData.main,
          wind: responseData.wind,
          rain: responseData.rain,
          clouds: responseData.clouds,
          dt: responseData.dt,
          sys: responseData.sys
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    console.log(this.state.coord);
    console.log(this.state.weather);
    console.log(this.state.base);
    console.log(this.state.main);
    console.log(this.state.wind);
    console.log(this.state.rain);
    console.log(this.state.clouds);
    console.log(this.state.dt);
    console.log(this.state.sys);

    return <h1>Weather</h1>;
  }
}

export default App;
