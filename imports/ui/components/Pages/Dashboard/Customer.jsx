import React, { Component } from 'react'
import { Reservations } from '../../../../api/reservations'
import { withTracker } from 'meteor/react-meteor-data';

let url = "/restaurant=";

class Customer extends Component {
  render() {
    console.log(this.props.reservations);
    return (
      <div>
        <h1>Customer Dashboard</h1>
        <h1>Your Current Reservations</h1>
        <ul>
          {
            this.props.reservations.map((value) => (
              <li key={value._id}>
                <div>
                  <p>{"RestaurantID: " + value.restaurantId}</p>
                  <p><a href={url+value.restaurantId}>Show Restaurant</a></p>
                  <p>{"Date: " + value.resDate.toISOString().substring(0, 10)}</p>
                  <p>{"Timeslot: " + value.resTimeSlot}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('reservations');
  Meteor.subscribe('restaurants');
  return {
    reservations: Reservations.find({ customer: Meteor.userId() }).fetch(),
  };
})(Customer);
