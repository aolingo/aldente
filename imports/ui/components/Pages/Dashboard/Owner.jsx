import React, { Component } from 'react'
import { Restaurants } from '../../../../api/restaurants'
import { withTracker } from 'meteor/react-meteor-data';
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Reservations } from '../../../../api/reservations';
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

`;

let url = "/restaurant=";

class Owner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showReserverations: false,
      rid: "",
      restName: "",
    }
  }

  // Helper to view all reservations of a restaurant given its id
  viewReservations(rid, name) {
    event.preventDefault()
    this.setState({ showReserverations: true, rid: rid, restName: name })
  }

  // Helper to edit an restaurant, takes the entire restaurant object as parameter
  editRestaurant(restObj) {
    event.preventDefault()
  }

  // Helper to delete a restaurant from the db given its id
  deleteRestaurant(rid) {
    event.preventDefault()
    Swal.fire({
      title: 'Delete your restaurant?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: "No"
    }).then((result) => {
      if (result.value) {
        Restaurant.remove({ _id: rid })
        Swal.fire(
          'Restaurant Deleted!',
          'We are sorry to see you go.',
          'success'
        )
      }
    })
  }

  // Helper to delete a restaurant from the db given its id
  deleteReservation(resId) {
    event.preventDefault();
    Swal.fire({
      title: 'Cancel this customer\'s reservation?',
      text: 'We\'ll notify the customer that their reservation has been cancelled',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Reservations.remove({ _id: resId })
        Swal.fire(
          'Cancelled!',
          'The reservation has been cancelled.',
          'success'
        )
      }
    })
  }

  render() {
    if (!this.state.showReserverations) {
      let data = []
      this.props.manageRestaurants.map((value) => (
        data.push({
          nameId: { name: value.name, id: value._id, link: url + value._id },
          restaurant: value,
        })
      ));

      const columns = [{
        id: 'nameId',
        Header: 'Restaurant',
        accessor: 'nameId', // String-based value accessors!
        Cell: e => <a href={e.value.link}>{e.value.name}</a>
      },
      {
        Header: "View Reservations",
        accessor: 'nameId',
        Cell: e => (
          <div>
            <button className="btn-outline-info btn-style"
              onClick={() => this.viewReservations(e.value.id, e.value.name)}>View</button>
          </div>
        )
      },
      {
        Header: "Edit Restaurant Info",
        accessor: 'value',
        Cell: e => (
          <div>
            <button className="btn-outline-info btn-style"
              onClick={() => this.editRestaurant(e.value)}>Edit</button>
          </div>
        )
      },
      {
        Header: "Delete Restaurant",
        accessor: 'restId',
        Cell: e => (
          <div>
            <button className="btn-outline-danger btn-style"
              onClick={() => this.deleteRestaurant(e.value)}>Delete</button>
          </div>
        )
      }
      ]

      return (
        <Intro>
          <div className="dashboard">
            <Container>
              <h4>Manage Your Restaurants</h4>
              <ReactTable
                data={data}
                columns={columns}
              />
            </Container>
          </div>
        </Intro>
      )
    }
    // Render all reservations for the clicked restaurant
    else {
      let reservationData = []
      let matchingReservations = []

      for (let reservation of this.props.reservations) {
        if (reservation.restaurantId === this.state.rid) {
          matchingReservations.push(reservation)
        }
      }

      matchingReservations.map((value) => (
        reservationData.push({
          nameId: { name: this.state.restName, link: url + this.state.rid },
          date: value.resDate.toISOString().substring(0, 10),
          timeslot: value.resTimeSlot,
          reservationName: value.resName,
          reservationPhone: value.resPhone,
          reservationGuest: value.resGuest,
          reservationId: value._id
        })
      ))

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
        accessor: 'date'
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
              onClick={() => this.deleteReservation(e.value)}>Delete</button>
          </div>
        )
      }
      ]

      return (
        <Intro>
          <div className="dashboard">
            <h4>List of Reservations</h4>
            <Container>
              <Button variant="light"
                onClick={() => location.reload()}>Back</Button>
              <h1></h1>
              <ReactTable
                data={reservationData}
                columns={columns}
              />
            </Container>
          </div>
        </Intro>
      )
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe('reservations');
  Meteor.subscribe('manageRestaurants');
  return {
    manageRestaurants: Restaurants.find().fetch(),
    reservations: Reservations.find().fetch(),
  };
})(Owner);
