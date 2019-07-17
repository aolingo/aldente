import { Mongo } from 'meteor/mongo';
import { RestaurantSchema } from './models/restaurantschema';

export const Restaurants = new Mongo.Collection('restaurants');

Restaurants.attachSchema(RestaurantSchema)