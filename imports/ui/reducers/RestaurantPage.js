export const viewRestaurantPage = (restaurant = {}, action) => {
  if (action.type === 'VIEW_RESTAURANT') {
    restaurant = action.payload;
  }
  if (action.type === 'RESERVE') {
    console.log(action.payload)
    restaurant = {
      name: action.payload.name,
      location: action.payload.location,
      photo: action.payload.photo,
      seats: action.payload.seats - 1,
    }
  }
  return restaurant;
}