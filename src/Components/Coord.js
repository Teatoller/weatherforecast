import React from "react";
import { Form, Button } from "react-bootstrap";

function Coord(props) {
  const data = props.coord;

  return (
    <div>
      <div>
        <h3>Coordinates:</h3>
        {data["lat"]} {data["lon"]}
        <hr />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter latitude"
              value={props.latitude}
              onChange={props.handleLatChange}
            />
            <Form.Text className="text-muted">
              Enter a number for the latitude.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter longitude"
              value={props.longitude}
              onChange={props.handleLonChange}
            />
            <Form.Text className="text-muted">
              Enter a number for the longitude.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="button" onClick={props.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
      <br />
      <p>
        <a
          href="https://www.latlong.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use this link to get coordinates of a specific location
        </a>
      </p>
    </div>
  );
}
export default Coord;
