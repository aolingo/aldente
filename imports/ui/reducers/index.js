import { combineReducers } from 'redux';

var restaurantTemp = [
    {
        name: "Paddy's Irish Pub",
        location: "Philadelphia, NY",
        photo: "https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709",
    },
    {
        name: "Paddy's Irish Pub",
        location: "Philadelphia, NY",
        photo: "https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709",
    },
    {
        name: "Paddy's Irish Pub",
        location: "Philadelphia, NY",
        photo: "https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709",
    },
    {
        name: "Central Perk Coffee House",
        location: "New York, NY",
        photo: "http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png",
    },
    {
        name: "Central Perk Coffee House",
        location: "New York, NY",
        photo: "http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png",
    },
    {
        name: "Central Perk Coffee House",
        location: "New York, NY",
        photo: "http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png",
    },
]

const restaurantReducer = (restaurants = restaurantTemp, action) => {
    return restaurants;
}

const rootReducer = combineReducers({
    restaurants: restaurantReducer,
});

export default rootReducer;