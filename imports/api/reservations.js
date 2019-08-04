import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ReservationSchema } from './models/restaurantschema';

export const Reservations = new Mongo.Collection('reservations');

Reservations.attachSchema(ReservationSchema);

Reservations.allow({
  insert: function (userId, tag) {
    return true;
  },
  remove: function() { return true; }
  })


if (Meteor.isServer) {
  // Publish all reservations associated with one customer
  Meteor.publish('custReservations', () => {
    return Reservations.find({ customer: Meteor.userId() })
  })

  // TODO: Secure reservations publishing
  // Publish reservations for its associated restaurant only
  // Meteor.publish('restReservations', () => {
  //   return Reservations.find({
  //     restaurantId: _id
  //   })
  // })
}
