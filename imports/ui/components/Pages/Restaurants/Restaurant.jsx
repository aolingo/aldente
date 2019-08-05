import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Restaurants } from '../../../../api/restaurants';
import { Reservations } from '../../../../api/reservations';
import NoMatch from '../NoMatch'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Intro = styled.div`
  .restaurant {
    padding-top: 50px;
    background-image: url(/imgs/bg.jpg);
  }

  h1 {
    color: #23233e;
    text-align: center;
    font-size: 1.7rem;
    font-family: "GT America Condensed Bold";
    font-weight: bold;

  }

  p {
    color: #4f4f65;
    text-align: center;
    font-family: "GT America Regular", "Comic Sans", cursive;
    font-size: 1.4 rem;
  }

  .container-reservation {
    border: 4px solid grey;
    border-radius: 25px;
    padding: 10px;
  }

  input {
    height: 30px;
    font-size: 16px;
    padding-top: 5px;
    padding-right: 16px;
    padding-bottom: 5px;
    padding-left: 16px;
  }

  select {
    height: 30px;
    font-size: 16px;
    padding-top: 5px;
    padding-right: 16px;
    padding-bottom: 5px;
    padding-left: 16px;
  }

  .form-group {
    margin-bottom: 2px;
  }

  .btn-space {
    margin-top: 12px;
  }
`;

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: this.props.match.params.id,
      date: new Date(),
    }
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  getMaxDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 4),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  handleSubmit(event) {
    event.preventDefault();

    if (Meteor.user()) {
      Reservations.insert({
        customer: Meteor.userId(),
        resDate: event.target.formDate.value,
        resTimeSlot: event.target.formTime.value,
        resName: event.target.formName.value,
        resGuest: event.target.formGuest.value,
        resPhone: event.target.formPhone.value,
        restaurantId: this.state.id
      }, function (err, res) {
        if (err) {
          Swal.fire(
            'Opps!',
            'Something went wrong with your booking. Please try again.',
            'error'
          )
          throw err;
        } else {
          Swal.fire(
            'Success!',
            'Your reservation was successfully booked.',
            'success'
          )
        }
      })
    }
    else {
      Swal.fire(
        'Are you logged in?',
        'Please log in to make a reservation.',
        'question'
      )
    }
  }

  render() {
    let restaurant = Restaurants.find(this.state.id).fetch();
    console.log(restaurant);

    // let FontAwesome = require('react-fontawesome');

    if (restaurant.length > 0) {
      return (
        <Intro>
          <div className="restaurant">
            <Container>
              <Row>
                <div className="vertical-crop slideshow-height">
                  <img src={restaurant[0].photo2} className={`width100 ${restaurant[0].restaurantId}`}></img>
                </div>
              </Row>
              <Row className="margin-top-20">
                <Col sm="9">
                  <h2>{restaurant[0].name}</h2>
                  <p className="margin-top-20 text-left">{restaurant[0].description}</p>
                  <Row className="margin-top-50">
                    <Col>
                      <img src="https://puu.sh/DV49D/170afac6e6.png" />
                    </Col>
                    <Col>
                      <Table>
                        <thead>
                          <tr>
                            <th>
                              <h3>Hours and Location</h3>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{restaurant[0].name}</td>
                          </tr>
                          <tr>
                            <td>{restaurant[0].contactInfo.address}</td>
                          </tr>
                          <tr>
                            <td>{`${restaurant[0].contactInfo.city}, ${restaurant[0].contactInfo.state}  ${restaurant[0].contactInfo.postalCode}`}</td>
                          </tr>
                          <tr>
                            <td>
                              <a href={restaurant[0].contactInfo.website} target="_blank">{restaurant[0].contactInfo.website}</a>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Col>
                <Col sm="3">
                  <div className="container-reservation">
                    <Form className="margin-top-10" onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formName" >
                        <Form.Label>Name of Reservation</Form.Label>
                        <Form.Control type="input" required></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formGuest" >
                        <Form.Label>Guests</Form.Label>
                        <Form.Control type="number" min="1" max={restaurant[0].reservationInfo.maxParty} required></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="tel" required></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" size="lg" defaultValue={this.formatDate(this.state.date)} min={this.formatDate(this.state.date)} max={this.getMaxDate(this.state.date)} required />
                      </Form.Group>
                      <Form.Group controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control as="select" size="lg" >
                          {restaurant[0].reservationInfo.timeSlots.map((value, index) =>
                            <option key={index}>{value}</option>
                          )}
                        </Form.Control>
                      </Form.Group>
                      <Button variant="success" type="submit" className="width100 btn-space">
                        Book Now
                  </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Intro>
      )
    }
    return (
      <NoMatch />
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('restaurants');
  return {
    restaurants: Restaurants.find().fetch(),
  };

})(Restaurant);
