export const viewRestaurant = (restaurant) => {
  console.log("Viewing " + restaurant.name);
  console.log(restaurant)
  return {
    type: "VIEW_RESTAURANT",
    payload: restaurant
  }
}

export const reserve = restaurant => {
    return {
      type: 'RESERVE',
      payload: restaurant
    }
}
