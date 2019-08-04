import React, { Component } from 'react'
import styled from 'styled-components';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = styled.div`
  .map-container {
    width: 800px;
    max-width: 100%;
    height: 500px;
  }
`;

export default class About extends Component {

  render() {
    return (
      <div>
        <h1>Team Al Dente</h1>
        <Map>
          <LoadScript id="script-loader" googleMapsApiKey="AIzaSyDuRmMGD9IngdlIEe2hcyumhStFLwmYM0Q">
            <GoogleMap
              id="circle-example"
              mapContainerStyle={{
                height: "400px",
                width: "800px"
              }}
              zoom={7}
              center={{
                lat: -3.745,
                lng: -38.523
              }}
            />
          </LoadScript>
        </Map>
      </div>
    )
  }
}