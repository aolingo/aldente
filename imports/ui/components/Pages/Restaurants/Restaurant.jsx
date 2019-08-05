import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Restaurants } from '../../../../api/restaurants';
import { Reservations } from '../../../../api/reservations';
import NoMatch from '../NoMatch'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Intro = styled.div`
  .restaurant {
    padding-top: 50px;
    padding-bottom: 50px;
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

const Map = styled.div`
  .map-container {
    width: 400px;
    max-width: 100%;
    height: 400px;
  }
`;

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: this.props.match.params.id,
      date: new Date(),
      isToday: true,
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

  formatPhone(phone) {
    var string = phone.toString()
    if (string.length === 10) {
      return '(' + string.substr(0, 3) + ') ' + string.substr(3, 3) + '-' + string.substr(6, 4);
    }
    else{
      return string;
    }
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

  checkTime(time) {
    var currentTime = parseInt(this.state.date.getHours() + '' + this.state.date.getMinutes());
    return this.state.isToday && time < currentTime;
  }

  handleDateChange(event, timeSlots) {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    var date = [year, month, day].join('-');

    if (event.target.value === date) {
      this.setState({isToday: true});
    } else {
      this.setState({isToday: false});
    }
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
                      <Map>
                        <LoadScript id="script-loader" googleMapsApiKey="AIzaSyDuRmMGD9IngdlIEe2hcyumhStFLwmYM0Q">
                          <GoogleMap
                            id="circle-example"
                            mapContainerStyle={{
                              height: "351px",
                              width: "411px"
                            }}
                            zoom={16}
                            center={{
                              lat: restaurant[0].contactInfo.lat,
                              lng: restaurant[0].contactInfo.lng
                            }}
                          >
                            <Marker position={{ lat: restaurant[0].contactInfo.lat, lng: restaurant[0].contactInfo.lng }} />
                          </GoogleMap>
                        </LoadScript>
                      </Map>
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
                            <td>{this.formatPhone(restaurant[0].contactInfo.phone)}</td>
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
                        <Form.Control type="date" size="lg" defaultValue={this.formatDate(this.state.date)} min={this.formatDate(this.state.date)} max={this.getMaxDate(this.state.date)} onChange={(e) => this.handleDateChange(e, restaurant[0].reservationInfo.timeSlots)} required />
                      </Form.Group>
                      <Form.Group controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control as="select" size="lg" >
                          {restaurant[0].reservationInfo.timeSlots.map((value, index) => {
                              if (!this.checkTime(value)) {
                                return <option key={index} disabled={this.checkTime(value)}>{value}</option>
                              }
                            }
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
    } else {
      return (
        <NoMatch />
      )
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe('restaurants');
  return {
    restaurants: Restaurants.find().fetch(),
  };

})(Restaurant);
