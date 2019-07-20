import React, { Component } from 'react'
import { Reservations } from '../../../../api/reservations'
import { withTracker } from 'meteor/react-meteor-data';

class Customer extends Component {
  render() {
    console.log(this.props.reservations);
    return (
      <div>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <ul>
          {
            this.props.reservations.map((value) => (
              <li key={value._id}>
                <div>
                  <p>{"RestaurantID: " + value._id}</p>
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
    reservations: Reservations.find({customer: Meteor.userId()}).fetch(),
  };
})(Customer);
