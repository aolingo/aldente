import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { RestaurantSchema } from './models/restaurantschema';

export const Restaurants = new Mongo.Collection('restaurants');

Restaurants.attachSchema(RestaurantSchema)

if (Meteor.isServer) {
  Meteor.publish('restaurants', function restaurantsPublication() {
    return Restaurants.find();
  })

  Meteor.publish('manageRestaurants', () => {
    console.log(this.userId);
    return Restaurants.find({
      owner: this.userId
    })
  })
}