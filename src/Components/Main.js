import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Main extends Component {
  render() {
    const data = this.props.main;

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ground Above Sea Level</th>
              <th>Sea Level</th>
              <th>Temparature</th>
              <th>Pressure</th>
              <th>Humidity</th>
              <th>Min_Temp</th>
              <th>Max_Temp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data["grnd_level"]}</td>
              <td>{data["sea_level"]}</td>
              <td>{data["temp"]}</td>
              <td>{data["pressure"]}</td>
              <td>{data["humidity"]}</td>
              <td>{data["temp_min"]}</td>
              <td>{data["temp_max"]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Main;
