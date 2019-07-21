import React, { Component } from 'react'
import { Restaurants } from '../../../../api/restaurants'
import { withTracker } from 'meteor/react-meteor-data';

let url = "/restaurant=";

class Owner extends Component {
  render() {
    return (
      <div>
        <h1>Owner Dashboard</h1>
        <h1>Manage Your Restaurants</h1>
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
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('manageRestaurants');
  return {
    restaurants: Restaurants.find({ owner: Meteor.userId() }).fetch(),
  };
})(Owner);
