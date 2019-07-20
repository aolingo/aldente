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

  .modal {
    margin: 0;
    text-align: center;
  }
`;

class Body extends Component {
  render() {
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
                    <RestaurantCard key={id} name={value.name} location={value.contactInfo.city + ", " + value.contactInfo.state} photo={value.photo} />
                  ))
                }
              </div>
            </div>
            {/* <div className="modal" id="restaurantModal" role="dialog">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">{this.props.restaurant.name}</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="bd-placeholder-img card-img-top" src={this.props.restaurant.photo} />
                    <p>Location: {this.props.restaurant.location}</p>
                    <p>Seats Remaining: {this.props.restaurant.seats}</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={() => this.props.reserve(this.props.restaurant)}>Reserve</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div> */}
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
