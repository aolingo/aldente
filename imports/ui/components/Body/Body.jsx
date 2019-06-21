import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slideshow from './Slideshow/Slideshow'
import RestaurantCard from './Restaurants/RestaurantCard';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Intro = styled.div`
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

class Body extends Component {
  render() {
    return (
      <React.Fragment>

        <Intro>
          <h1>Too shy to make a reservation through the phone?</h1>
          <p>There are hot local restaurants in your area dying to meet you</p>
        </Intro>

        <Slideshow />
        <Container>
          <div className="album py-5">
            <div className="row">
              {
                this.props.restaurants.map((value, i) => (
                  <RestaurantCard name={value.name} location={value.location} photo={value.photo} />
                ))
              }
            </div>
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
}

export default connect(mapStateToProps, {})(Body);