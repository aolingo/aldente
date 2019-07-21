import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Slideshow from './Slideshow/Slideshow'
import RestaurantCard from './RestaurantCard';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '/imports/ui/css/ui.css'
import { Restaurants } from '../../../../api/restaurants'
import { withTracker } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router'

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

class Body extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      redirect: false,
      redirectId: ""
    }
  }

  handleOnClick = (id) => {
    this.setState({ redirect: true, redirectId: id });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={"/restaurant=" + this.state.redirectId} />;
    }
    return (
      <Intro>
        <div className="homepage">
          <h1>Too shy to make a reservation through the phone?</h1>
          <p>There are hot local restaurants in your area dying to meet you</p>
          <Slideshow />
          <Container>
            <div className="album py-5">
              <div className="row">
                {
                  this.props.restaurants.map((value, id) => (
                    <RestaurantCard key={id} name={value.name} location={value.contactInfo.city + ", " + value.contactInfo.state} photo={value.photo} id={value._id} handler={this.handleOnClick} />
                  ))
                }
              </div>
            </div>
          </Container>
        </div>
      </Intro>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('restaurants');
  return {
    restaurants: Restaurants.find().fetch(),
  };
})(Body);
