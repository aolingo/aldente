import React, { Component } from 'react'
import { Restaurants } from '../../../../api/restaurants'
import { withTracker } from 'meteor/react-meteor-data';

class Owner extends Component {
  render() {
    return (
      <div>
        <h1>Owner Dashboard</h1>
        <h1>Owner Dashboard</h1>
        <ul>
          {
            this.props.restaurants.map((value, id) => (
              <li>{value.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('manageRestaurants');
  return {
    restaurants: Restaurants.find().fetch(),
  };
})(Owner);