import { Mongo } from 'meteor/mongo';

export const Info = new Mongo.Collection('aboutus');

if (Meteor.isClient) {
  Meteor.startup(function () {
  });
}