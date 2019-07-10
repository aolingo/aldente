import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Restaurants } from '../../../../api/restaurants';
import NoMatch from '../NoMatch'

class Restaurant extends Component {

  render() {
    let id = this.props.match.params.id;
    const ObjectId = require('mongoose').Types.ObjectId;

    if (ObjectId.isValid(id)) {
      let oid = new Meteor.Collection.ObjectID(id);
      let restaurant = Restaurants.find(oid).fetch();
      console.log(restaurant);

      if (restaurant.length > 0) {
        return (
          <div>
            {
              restaurant.map((val) => (
                <h1 key='name'>{val.name}</h1>
              ))
            }
          </div>
        )
      }
    }
    return (
      <NoMatch />
    )
  }
}

export default withTracker(() => {

  return {
    restaurants: Restaurants.find().fetch(),
  };

})(Restaurant);
