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
        </div>
      </Intro>
    )
  }
}
