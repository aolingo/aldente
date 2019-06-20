import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slideshow from './Slideshow/Slideshow'
import RestaurantCard from './Restaurants/RestaurantCard';

class Body extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {
                this.props.restaurants.map((value, i) => (
                  <RestaurantCard name={value.name} location={value.location} photo={value.photo} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
}

export default connect(mapStateToProps, {})(Body);