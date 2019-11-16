import React from "react";
import { Table } from "react-bootstrap";

function Wind(props) {
  const data = props.wind;
  return (
    <div>
      <h3>Wind: </h3>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Speed</th>
              <th>Direction/degrees</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data["speed"]}</td>
              <td>{data["deg"]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Wind;
