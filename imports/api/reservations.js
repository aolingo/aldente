import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ReservationSchema } from './models/restaurantschema';

export const Reservations = new Mongo.Collection('reservations');

Reservations.attachSchema(ReservationSchema);

Reservations.allow({
  insert: function(userId, tag) {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish('reservations', function restaurantsPublication() {
    return Reservations.find();
  })
}
