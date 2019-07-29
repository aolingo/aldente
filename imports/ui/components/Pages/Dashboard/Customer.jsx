import React, { Component } from 'react'
import { Reservations } from '../../../../api/reservations'
import { withTracker } from 'meteor/react-meteor-data';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import styled from 'styled-components';
import { Container } from 'react-bootstrap';


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
      <Intro>
        <div className="dashboard">
          <h4>Your Current Reservations</h4>
          <Container>
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
          </Container>
        </div>
      </Intro>
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
