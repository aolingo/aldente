import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ReservationSchema } from './models/restaurantschema';

export const Reservations = new Mongo.Collection('reservations');

Reservations.attachSchema(ReservationSchema);

if (Meteor.isServer) {
  Meteor.publish('reservations', function restaurantsPublication() {
    return Reservations.find();
  })
}