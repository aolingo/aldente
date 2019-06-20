import React, { Component } from 'react'
import RestaurantCard from './RestaurantCard'

export default class Body extends Component {
  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <RestaurantCard
              photo="https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709"
              name="Paddy's Irish Pub"
              location="Philadelphia, NY"
            />
            <RestaurantCard
              photo="https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709"
              name="Paddy's Irish Pub"
              location="Philadelphia, NY"
            />
            <RestaurantCard
              photo="https://vignette.wikia.nocookie.net/itsalwayssunny/images/e/e1/1x1_Paddys.png/revision/latest/scale-to-width-down/640?cb=20110709045709"
              name="Paddy's Irish Pub"
              location="Philadelphia, NY"
            />
            <RestaurantCard
              photo="http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png"
              name="Central Perk Coffee House"
              location="New York, NY"
            />
            <RestaurantCard
              photo="http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png"
              name="Central Perk Coffee House"
              location="New York, NY"
            />
            <RestaurantCard
              photo="http://www.manchestersfinest.com/wp-content/uploads/2019/06/central-perk.png"
              name="Central Perk Coffee House"
              location="New York, NY"
            />
          </div>
        </div>
      </div>
    )
  }
}
