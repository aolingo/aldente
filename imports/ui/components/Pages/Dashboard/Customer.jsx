import React, { Component } from 'react'
import { Reservations } from '../../../../api/reservations'
import { withTracker } from 'meteor/react-meteor-data';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

let url = "/restaurant=";

class Customer extends Component {
  render() {
    console.log(this.props.reservations);
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]

    return (
      <div>
        <h1>Customer Dashboard</h1>
        <h1>Your Current Reservations</h1>
        <ReactTable
          data={data}
          columns={columns}
        />
        <ul>
          {
            this.props.reservations.map((value) => (
              <li key={value._id}>
                <div>
                  <p>{"RestaurantID: " + value.restaurantId}</p>
                  <p><a href={url + value.restaurantId}>Show Restaurant</a></p>
                  <p>{"Date: " + value.resDate.toISOString().substring(0, 10)}</p>
                  <p>{"Timeslot: " + value.resTimeSlot}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('reservations');
  Meteor.subscribe('restaurants');
  return {
    reservations: Reservations.find({ customer: Meteor.userId() }).fetch(),
  };
})(Customer);
