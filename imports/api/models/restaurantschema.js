import SimpleSchema from 'simpl-schema';

//schema for restaurant reservations, by default all keys are required
export const ReservationSchema = new SimpleSchema({
  _revId: SimpleSchema.RegEx.Id,
  customer: { type: SimpleSchema.RegEx.Id, ref: 'User' },
  resDate: Date,
  resTimeSlot: Number,
  restaurantId: { type: SimpleSchema.RegEx.Id, ref: 'Restaurant' },
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

//create geolocation Schema to be used in restaurant schema for restaurant coordinates
export const GeoSchema = new SimpleSchema({
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
export const RestaurantSchema = new SimpleSchema({
  name: {
    type: String, required: [true, 'Sitcom field is required']
  },
  owner: { type: SimpleSchema.RegEx.Id, ref: 'User' },
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