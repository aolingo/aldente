import React, { Component } from 'react'
import { Restaurants } from '../../../../api/restaurants'
import { withTracker } from 'meteor/react-meteor-data';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Intro = styled.div`
  .dashboard {
    padding-top: 75px;
    background-image: url(/imgs/bg.jpg);
  }

  h4 {
    color: #23233e;
    text-align: center;
    font-family: "GT America Condensed Bold";
    font-weight: bold;

  }

  p {
    color: #4f4f65;
    font-family: "GT America Regular", "Comic Sans", cursive;
    font-size: 1.4 rem;
  }

`;

let url = "/restaurant=";

class Owner extends Component {
  render() {
    return (
      <Intro>
        <div className="dashboard">
          <Container>
            <h4>Manage Your Restaurants</h4>
            <ul>
              {
                this.props.restaurants.map((value) => (
                  <li key={value._id}>
                    <div>
                      <p>{"RestaurantID: " + value._id}</p>
                      <p>{"Restaurant Name: " + value.name}</p>
                      <p><a href={url + value._id}>View Restaurant Page</a></p>
                      <p>{"Reservations: " + value.reservations}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </Container>
        </div>
      </Intro>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('manageRestaurants');
  return {
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch(),
  };
})(Owner);
