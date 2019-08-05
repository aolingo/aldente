import React, { Component } from 'react'
import '../../css/about.css'

export default class About extends Component {

  

  render() {
    return (
      <div className="margin-text">
       <img src="/imgs/Logo.png" width="2500" className="d-inline-block align-top" />
        <h4 className="text-align: center">
          Project Description
        </h4>
        <div className="proj-desc">
        <h6>
The project is a reservation platform for restaurants. There will be two type of users, customers and restaurant/business owners. Both of which will have their own separate account portal once they signed up for an account on the website. For customers, they will be able to browse through restaurants displayed on the platform (basic restaurant information) and make a reservation through the website's system. Customers will then be able to see their list of made reservations (including past reservations) on their account page. For restaurant owners, once they log in to the system, they will be able to see and manage reservations made at their diners.
        </h6>
        </div>
        <h4>
          THE BUISNESS OF GOOD FOOD
        </h4>
        <div className="proj-desc">
        <p>
        We aim to making reservations at local restaurants a simple task. 
        Restaurant owners can add restaurants, manage, reserve and organize their buisness based on their personalized needs. 
        </p>
        </div>
      </div>
    )
  }
}