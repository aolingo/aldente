import SimpleSchema from 'simpl-schema';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema for restaurant reservations
const ReservationSchema = new SimpleSchema({
  _resId: Schema.Types.ObjectId,
  customer: { type: Schema.ObjectId, ref: 'User' },
  resDate: Date,
  resTimeSlot: Number,
  restId: { type: Schema.ObjectId, ref: 'Restaurant' }
});

//create geolocation Schema to be used in restaurant schema
const GeoSchema = new SimpleSchema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

//create a Restaurant Schema & model
const RestaurantSchema = new SimpleSchema({
  name: {
    type: String, required: [true, 'Sitcom field is required']
  },
  owner: { type: Schema.ObjectId, ref: 'User' },
  description: {
    type: String, required: [true, 'Character field is required']
  },
  photo: {
    type: String, required: [true, 'A photo link is required']
  },
  contactInfo: {
    phone: Number,
    website: String,
    menu: String,
    location: {
      postalCode: String,
      state: String,
      city: String,
      address: String,
      geometry: GeoSchema
    }
  },
  reservationInfo: {
    seats: Number,
    timeSlots: [Number],
    maxParty: {
      type: Number, min: 1, max: 20
    },
    closedDays: [String]
  },
  reservations: [ReservationSchema]
});

const Restaurant = mongoose.model('restaurant', RestaurantSchema);
const Reservation = mongoose.model('reservation', ReservationSchema);

module.exports = Restaurant;
module.exports = Reservation;