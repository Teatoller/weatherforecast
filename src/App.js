import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import Weather from "./Components/Weather";
import Coord from "./Components/Coord";
import Base from "./Components/Base";
import Main from "./Components/Main";
import Wind from "./Components/Wind";
import Rain from "./Components/Rain";
import Sys from "./Components/Sys";

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 1.2921,
      longitude: 36.8219,
      coord: {
        lat: 1.29,
        lon: 36.82
      },
      weather: [],
      base: "",
      main: {},
      wind: {},
      rain: [],
      sys: {}
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
  }

  handleLatChange = event => {
    const target = event.target;
    const value = target.value;

    this.setState(prevState => ({
      latitude: (prevState.latitude = value)
    }));

    this.setState(prevState => ({
      lat: (prevState.coord.lat = value)
    }));

  };

  handleLonChange = event => {
    const target = event.target;
    const value = target.value;

    this.setState(prevState => ({
      longitude: (prevState.longitude = value)
    }));

    this.setState(prevState => ({
      lon: (prevState.coord.lon = value)
    }));

  };

  componentDidMount() {
    axios
      .get(
        `https://fcc-weather-api.glitch.me//api/current?lat=${this.state.latitude}&lon=${this.state.longitude}`
      )
      .then(response => {
        this.setState({
          coord: response.data.coord,
          weather: response.data.weather,
          base: response.data.base,
          main: response.data.main,
          wind: response.data.wind,
          rain: response.data.rain,
          sys: response.data.sys
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    console.log("lat........>...", this.state.latitude);
    console.log("lon,,,>,,,,", this.state.longitude);
    return (
      <div>
        <div>
          <Coord
            coord={this.state.coord}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            handleLatChange={this.handleLatChange}
            handleLonChange={this.handleLonChange}
          />
        </div>

        <div>
          <Weather weather={this.state.weather} />
        </div>

        <div>
          <Base base={this.state.base} />
        </div>

        <div>
          <Sys sys={this.state.sys} />
        </div>

        <div>
          <Main main={this.state.main} />
        </div>

        <div>
          <Wind wind={this.state.wind} />
        </div>

        <div>
          <Rain rain={this.state.rain} />
        </div>
      </div>
    );
  }
}

export default App;
