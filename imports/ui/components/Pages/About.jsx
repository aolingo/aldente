import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Info } from '../../../api/aboutus';
import styled from 'styled-components';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = styled.div`
  .map-container {
    width: 800px;
    max-width: 100%;
    height: 500px;
  }
`;

class About extends Component {

  render() {
    return (
      <div>
        {this.props.info.map((val) => (
          <p>{val.title}</p>
        ))}
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

export default withTracker(() => {
  return {
    info: Info.find().fetch(),
  };
})(About);