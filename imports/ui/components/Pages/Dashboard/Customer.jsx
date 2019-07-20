import React, { Component } from 'react'
import { Reservations } from '../../../../api/reservations'
import { withTracker } from 'meteor/react-meteor-data';

class Customer extends Component {
  render() {
    return (
      <div>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>
        <h1>Customer Dashboard</h1>

      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('reservations');
  return {
    restaurants: Reservations.find().fetch(),
  };
})(Customer);
