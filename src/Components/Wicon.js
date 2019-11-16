import React from "react";
import { Table } from "react-bootstrap";

function Wicon(props) {
  let results = props.item;

  return (
    <div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Status</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{results["main"]}</td>
              <td>{results["description"]}</td>
              <td>
                <img src={results["icon"]} alt="" />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Wicon;
