import React, { Component } from 'react'
import { Reservations } from '../../../../api/reservations'
import { Restaurants } from '../../../../api/restaurants'
import { withTracker } from 'meteor/react-meteor-data';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Intro = styled.div`
  .dashboard {
    padding-top: 75px;
    background-image: url(/imgs/bg.jpg);
  }

  h4 {
    color: #23233e;
    text-align: center;
    font-family: "GT America Condensed Bold";
    font-weight: bold;

  }

  p {
    color: #4f4f65;
    font-family: "GT America Regular", "Comic Sans", cursive;
    font-size: 1.4 rem;
  }

  .btn-style {
    border-radius: 8% 
  }
`;

let url = "/restaurant=";

class Customer extends Component {

  getRestaurantName(id, nameArray) {

    if (nameArray.length > 0) {
      for (let rest of nameArray) {
        if (rest._id === id) {
          return rest.name;
        }
      }
    }
    return;
  }

  deleteReservation(resId) {
    event.preventDefault();
    Reservations.remove({_id: resId})
    Swal.fire(
      'Success!',
      'Your reservation was successfully cancelled.',
      'success'
    )
  }

  render() {
    let data = []
    let names = this.props.restaurantNames
    this.props.custReservations.map((value) => (
      data.push({
        nameId: { name: this.getRestaurantName(value.restaurantId, names), link: url + value.restaurantId },
        date: value.resDate.toISOString().substring(0, 10),
        timeslot: value.resTimeSlot,
        reservationName: value.resName,
        reservationPhone: value.resPhone,
        reservationGuest: value.resGuest,
        reservationId: value._id
      })
    ));

    const columns = [{
      id: 'nameId',
      Header: 'Restaurant',
      accessor: 'nameId', // String-based value accessors!
      Cell: e => <a href={e.value.link}>{e.value.name}</a>
    }, {
      Header: 'Reservation Under', // Custom header components!
      accessor: 'reservationName'
    },
    {
      Header: 'Customer Phone', // Custom header components!
      accessor: 'reservationPhone'
    }, {
      id: 'date',
      Header: 'Reservation Date',
      accessor: 'date',
    }, {
      Header: 'Reservation Time', // Custom header components!
      accessor: 'timeslot'
    },
    {
      Header: 'Guests', // Custom header components!
      accessor: 'reservationGuest'
    },
    {
    Header: "Manage Reservation",
    accessor: 'reservationId',
    Cell: e => (
      <div>
          <button className="btn-outline-danger btn-style"
onClick={() => this.deleteReservation(e.value)}>Cancel</button>
      </div>
    )
    }
    ]

    return (
      <Intro>
        <div className="dashboard">
          <h4>Your Current Reservations</h4>
          <Container>
            <ReactTable
              data={data}
              columns={columns}
            />
          </Container>
        </div>
      </Intro>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('custReservations');
  Meteor.subscribe('restaurants');
  return {
    custReservations: Reservations.find().fetch(),
    restaurantNames: Restaurants.find({}, { fields: { name: 1 } }).fetch(),
  };
})(Customer);