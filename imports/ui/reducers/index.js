import { combineReducers } from 'redux';
import { viewRestaurantCards } from './RestaurantCard';
import { viewRestaurantPage } from './RestaurantPage';

const rootReducer = combineReducers({
  restaurants: viewRestaurantCards,
  restaurant: viewRestaurantPage
});

export default rootReducer;
