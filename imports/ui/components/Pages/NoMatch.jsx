import React, { Component } from 'react'
import styled from 'styled-components';

const Intro = styled.div`
  .homepage {
    padding-top: 75px;
    background-image: url(/imgs/bg.jpg);
  }

  h1 {
    color: #23233e;
    text-align: center;
    font-size: 1.7rem;
    font-family: "GT America Condensed Bold";
    font-weight: bold;

  }

  p {
    color: #4f4f65;
    text-align: center;
    font-family: "GT America Regular", "Comic Sans", cursive;
    font-size: 1.4 rem;
  }
`;

export default class NoMatch extends Component {
  render() {
    return (
      <Intro>
        <div className="style">
          <h2>No Match</h2>
        </div>
      </Intro>
    )
  }
}
