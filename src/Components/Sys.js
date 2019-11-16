import React from "react";
import { Table } from "react-bootstrap";

function Sys(props) {
  const data = props.sys;

  return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Location/Country</th>
              <th>Sunrise</th>
              <th>Sunset</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data["country"]}</td>
              <td>{data["sunrise"]}</td>
              <td>{data["sunset"]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
  );
}
export default Sys;
