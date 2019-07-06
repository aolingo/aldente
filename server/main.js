import { Meteor } from 'meteor/meteor';
import Restaurants from '../imports/api/restaurants';
import Reservations from '../imports/api/reservations';

function insertRestaurant(title, url) {
  Restaurants.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.

  /*  if (Links.find().count() === 0) {
      insertLink(
        'Do the Tutorial',
        'https://www.meteor.com/tutorials/react/creating-an-app'
      );
  
      insertLink(
        'Follow the Guide',
        'http://guide.meteor.com'
      );
  
      insertLink(
        'Read the Docs',
        'https://docs.meteor.com'
      );
  
      insertLink(
        'Discussions',
        'https://forums.meteor.com'
      );
    } */
});
