import React, { Component } from "react";
import Wicon from "./Wicon";

class Weather extends Component {
  render() {
    const data = this.props.weather;

    const items = data.map(item => <Wicon key={item.id} item={item} />);

    return (
      <div>
        <h1>Weather:</h1>
        {items}
      </div>
    );
  }
}
export default Weather;
