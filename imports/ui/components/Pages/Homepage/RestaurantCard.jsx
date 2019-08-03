import React, { Component } from 'react'

export default class RestaurantCard extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="vertical-crop-card">
            <img className="bd-placeholder-img card-img-top" src={this.props.photo} />
          </div>
          <div className="card-body">
            <p className="card-text">{this.props.name}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#restaurantModal" onClick={() => this.props.handler(this.props.id)}>View</button>
              </div>
              <small className="text-muted">{this.props.location}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
