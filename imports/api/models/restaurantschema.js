import SimpleSchema from 'simpl-schema';

//schema for restaurant reservations, by default all keys are required
export const ReservationSchema = new SimpleSchema({
  customer: SimpleSchema.RegEx.Id,
  resDate: Date,
  resTimeSlot: Number,
  restaurantId: SimpleSchema.RegEx.Id,
  createdAt: {
    type: Date,
    // Force value to be current date (on server) upon insert
    // and prevent updates thereafter.
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  }
});

//create a Restaurant Schema & model
export const RestaurantSchema = new SimpleSchema({
  name: String,
  owner: SimpleSchema.RegEx.Id,
  description: String,
  photo: String,
  contactInfo: Object,
  'contactInfo.phone': Number,
  'contactInfo.website': String,
  'contactInfo.postalCode': String,
  'contactInfo.state': String,
  'contactInfo.city': String,
  'contactInfo.address': String,
  'contactInfo.lat': Number,
  'contactInfo.lng': Number,
  reservationInfo: Object,
  'reservationInfo.seats': Number,
  'reservationInfo.timeSlots': [Number],
  'reservationInfo.maxParty': {
    type: Number, min: 1, max: 20, optional: true
  },
  'reservationInfo.closedDays': { type: Array, optional: true },
  'reservationInfo.closedDays.$': String,
  reservations: { type: Array, optional: true },
  'reservations.$': ReservationSchema
});
