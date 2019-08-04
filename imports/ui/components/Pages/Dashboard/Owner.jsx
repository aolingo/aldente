import React, { Component } from 'react'
import { Restaurants } from '../../../../api/restaurants'
import { withTracker } from 'meteor/react-meteor-data';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Reservations } from '../../../../api/reservations';

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
  render() {
    console.log(this.props.reservations);
    let data = []
    this.props.manageRestaurants.map((value) => (
      data.push({
        nameId: { name: value.name, link: url + value._id },
      })
    ));

    const columns = [{
      id: 'nameId',
      Header: 'Restaurant',
      accessor: 'nameId', // String-based value accessors!
      Cell: e => <a href={e.value.link}>{e.value.name}</a>
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
}

export default withTracker(() => {
  Meteor.subscribe('reservations');
  Meteor.subscribe('manageRestaurants');
  return {
    manageRestaurants: Restaurants.find().fetch(),
    reservations: Reservations.find({ restaurantId: "JGeweAASSpiHCgq58" }).fetch(),
  };
})(Owner);
