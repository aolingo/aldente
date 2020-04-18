import React, { Component } from 'react'
import styled from 'styled-components';

const Intro = styled.div`
  .homepage {
    padding-top: 10px;
    background-image: url(/imgs/bg.jpg);
  }
`;

export default class NoMatch extends Component {
  render() {
    return (
      <Intro>
        <div className="homepage">
          <p>No Match</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <h1>¯\_(ツ)_/¯</h1>
          <h2>Nothing here</h2>
        </div>
      </Intro>
    )
  }
}
