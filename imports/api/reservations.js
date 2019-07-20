import { Mongo } from 'meteor/mongo';
import { ReservationSchema } from './models/restaurantschema';

export const Reservations = new Mongo.Collection('reservations');

Reservations.attachSchema(ReservationSchema);