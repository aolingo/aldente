var restaurantTemp = [
  {
    name: "Restaurant 1",
    location: "Vancouver, BC",
    photo: "https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709",
    seats: 30,
    id: 0,
  },
  {
    name: "Restaurant 2",
    location: "Richmond, BC",
    photo: "https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709",
    seats: 30,
    id: 1,
  },
  {
    name: "Restaurant 3",
    location: "Burnaby, BC",
    photo: "https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709",
    seats: 30,
    id: 2,
  },
  {
    name: "Restaurant 4",
    location: "Toronto, ON",
    photo: "http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png",
    seats: 30,
    id: 3,
  },
  {
    name: "Restaurant 5",
    location: "Montreal, QC",
    photo: "http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png",
    seats: 30,
    id: 4,
  },
  {
    name: "Restaurant 6",
    location: "New York, NY",
    photo: "http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png",
    seats: 30,
    id: 5,
  },
]

export const viewRestaurantCards = (restaurants = restaurantTemp, action) => {
  return restaurants;
}