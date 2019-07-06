import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {viewRestaurant} from '../../../actions'

class RestaurantCard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="bd-placeholder-img card-img-top" src={this.props.photo} />
          <div className="card-body">
            <p className="card-text">{this.props.name}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#restaurantModal" onClick={() => this.props.viewRestaurant(this.props)}>View</button>
              </div>
              <small className="text-muted">{this.props.location}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// TODO: Reformat this
function mapStateToProps(state) {
  return {
    restaurant: state.restaurant
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({viewRestaurant: viewRestaurant}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RestaurantCard);
