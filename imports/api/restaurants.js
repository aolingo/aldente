import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { RestaurantSchema } from './models/restaurantschema';

export const Restaurants = new Mongo.Collection('restaurants');

Restaurants.attachSchema(RestaurantSchema)

Restaurants.allow({
  insert: function (userId, tag) {
    return true;
  },
  remove: function () { return true; },
  update: function () { return true; }
})

if (Meteor.isServer) {
  Meteor.publish('restaurants', function restaurantsPublication() {
    return Restaurants.find();
  })

  Meteor.publish('manageRestaurants', function managePublication() {
    return Restaurants.find({
      owner: this.userId
    })
  })
}
