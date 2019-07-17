import { Mongo } from 'meteor/mongo';
import { ReservationSchema, GeoSchema, RestaurantSchema } from './models/restaurantschema';

export const Reservations = new Mongo.Collection('reservations');

Reservations.attachSchema(ReservationSchema);