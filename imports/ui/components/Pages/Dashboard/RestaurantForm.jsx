import React, { Component } from 'react';
import styled from 'styled-components';
import { Restaurants } from '../../../../api/restaurants';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import '../../../css/restaurantForm.css';
import Swal from 'sweetalert2';
import Owner from './Owner';

const Intro = styled.div`
  .form {
    padding-top: 75px;
    background-image: url(/imgs/bg.jpg);
    margin-left: 30px;
    padding-bottom: 50px;
  }

  input {
    height: 30px;
    font-size: 16px;
    padding-top: 5px;
    padding-right: 16px;
    padding-bottom: 5px;
    padding-left: 16px;
  }
`;

export default class RestaurantForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      showDashboard: false,
      restaurant: {},
    }
  }

  // Helper to go back to owner dashboard from restaurant form page
  goBack() {
    event.preventDefault()
    this.setState(prevState => ({
      showDashboard: !prevState.showDashboard
    }))
  }

  handleSubmit() {
    event.preventDefault()
    if (Meteor.user()) {
      // Parse Timeslots into array
      var options = event.target.formTimeSlot.options;
      var timeslots = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          timeslots.push(options[i].value);
        }
      }
      if(!this.props.editFlag) {
        Restaurants.insert({
          restaurantId: event.target.formRestaurantId.value,
          name: event.target.formName.value,
          owner: Meteor.userId(),
          description: event.target.formDescription.value,
          photo: event.target.formPhoto.value,
          photo2: event.target.formPhoto2.value,
          contactInfo: {
            phone: event.target.formPhone.value,
            website: event.target.formWebsite.value,
            postalCode: event.target.formPCode.value,
            state: event.target.formState.value,
            city: event.target.formCity.value,
            address: event.target.formAddress.value,
            lat: event.target.formLat.value,
            lng: event.target.formLng.value,
          },
          reservationInfo: {
            seats: 30,
            timeSlots: timeslots,
            maxParty: event.target.formParty.value,
            closedDays: [],
          },
        }, function (err, res) {
          if (err) {
            Swal.fire(
              'Oops!',
              err.toString(),
              'error'
            )
            throw err;
          } else {
            Swal.fire(
              'Success!',
              'Your new restaurant was successfully created.',
              'success'
            ).then((result) => {
              if (result.value) {
                window.location.href = '/dashboard/owner'
              }
            })
          }
        })
      } else {
        console.log(this.props.restaurant._id);
        Restaurants.update({_id: this.props.restaurant._id}, {$set:{
          restaurantId: event.target.formRestaurantId.value,
          name: event.target.formName.value,
          owner: Meteor.userId(),
          description: event.target.formDescription.value,
          photo: event.target.formPhoto.value,
          photo2: event.target.formPhoto2.value,
          contactInfo: {
            phone: event.target.formPhone.value,
            website: event.target.formWebsite.value,
            postalCode: event.target.formPCode.value,
            state: event.target.formState.value,
            city: event.target.formCity.value,
            address: event.target.formAddress.value,
            lat: event.target.formLat.value,
            lng: event.target.formLng.value,
          },
          reservationInfo: {
            seats: 30,
            timeSlots: timeslots,
            maxParty: event.target.formParty.value,
            closedDays: [],
          },
        }}, function (err, res) {
          if (err) {
            Swal.fire(
              'Oops!',
              err.toString(),
              'error'
            )
            throw err;
          } else {
            Swal.fire(
              'Success!',
              'Your restaurant was successfully updated.',
              'success'
            ).then((result) => {
              if (result.value) {
                window.location.href = '/dashboard/owner'
              }
            })
          }
        })
      }
    }
  }

  render() {
    if (!this.state.showDashboard) {
      if (!this.props.editFlag) {
        // Show the empty restaurant form for creating a new restaurant
        return (
          <Intro>
            <div className="form">
              <Container>
                <h1>Create/Edit Your Restaurant</h1>
                <Form onSubmit={this.handleSubmit}>

                  <Form.Row>
                    <Form.Group as={Col} className="" controlId="formRestaurantId">
                      <Form.Label>Restaurant ID</Form.Label>
                      <Form.Control type="input" placeholder="poplargrovewinery" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formName">
                      <Form.Label>Restaurant Name</Form.Label>
                      <Form.Control type="input" placeholder="Poplar Grove Winery" required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formDescription">
                    <Form.Label>Restaurant Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion. Trust the natural recursion." required />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formPhoto">
                      <Form.Label>Restaurant Card Picture URL</Form.Label>
                      <Form.Control type="input" placeholder="Suggested Size: 800x600" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPhoto2">
                      <Form.Label>Restaurant Header Picture URL</Form.Label>
                      <Form.Control type="input" placeholder="Suggested Size: 800x600" required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formWebsite">
                      <Form.Label>Restaurant Website</Form.Label>
                      <Form.Control type="input" placeholder="a1dente.herokuapp.com" required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPhone">
                      <Form.Label>Restaurant Phone</Form.Label>
                      <Form.Control type="tel" placeholder="6042241322 no dashes" required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" required />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control placeholder="Saint-Louis-du-Ha! Ha!" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formState">
                      <Form.Label>Province</Form.Label>
                      <Form.Control as="select" required>
                        <option>AB</option>
                        <option>BC</option>
                        <option>MB</option>
                        <option>NB</option>
                        <option>NL</option>
                        <option>NS</option>
                        <option>NT</option>
                        <option>NU</option>
                        <option>ON</option>
                        <option>PE</option>
                        <option>QC</option>
                        <option>SK</option>
                        <option>YT</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPCode">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control type="input" placeholder="V7L 2N4" required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formLat">
                      <Form.Label>Latitude</Form.Label>
                      <Form.Control placeholder="49.5123363" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLng">
                      <Form.Label>Longitude</Form.Label>
                      <Form.Control placeholder="-119.5760359" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formParty">
                      <Form.Label>Maximum Party Allowed</Form.Label>
                      <Form.Control type="number" min="1" placeholder="1" required />
                    </Form.Group>

                  </Form.Row>

                  <Form.Group controlId="formTimeSlot">
                    <Form.Label>Select All Appropriate Time Slots</Form.Label>
                    <Form.Control as="select" multiple required>
                      <option>0800</option>
                      <option>0900</option>
                      <option>1000</option>
                      <option>1100</option>
                      <option>1200</option>
                      <option>1300</option>
                      <option>1400</option>
                      <option>1500</option>
                      <option>1600</option>
                      <option>1700</option>
                      <option>1800</option>
                      <option>1900</option>
                      <option>2000</option>
                      <option>2100</option>
                      <option>2200</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                    </Button>
                  <Button variant="light"
                    onClick={() => this.goBack()}>Back</Button>
                </Form>
              </Container>
            </div>
          </Intro>
        )
      }
      // Show the Edit Restaurant Form with prepopulated information
      else {
        return (
          <Intro>
            <div className="form">
              <Container>
                <h1>Create/Edit Your Restaurant</h1>
                <Form onSubmit={this.handleSubmit}>

                  <Form.Row>
                    <Form.Group as={Col} className="" controlId="formRestaurantId">
                      <Form.Label>Restaurant ID</Form.Label>
                      <Form.Control type="input" defaultValue={this.props.restaurant.restaurantId} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formName">
                      <Form.Label>Restaurant Name</Form.Label>
                      <Form.Control type="input" defaultValue={this.props.restaurant.name} required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formDescription">
                    <Form.Label>Restaurant Description</Form.Label>
                    <Form.Control as="textarea" rows="3" defaultValue={this.props.restaurant.description} required />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formPhoto">
                      <Form.Label>Restaurant Card Picture URL</Form.Label>
                      <Form.Control type="input" defaultValue={this.props.restaurant.photo} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPhoto2">
                      <Form.Label>Restaurant Header Picture URL</Form.Label>
                      <Form.Control type="input" defaultValue={this.props.restaurant.photo2} required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formWebsite">
                      <Form.Label>Restaurant Website</Form.Label>
                      <Form.Control type="input" defaultValue={this.props.restaurant.contactInfo.website} required />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPhone">
                      <Form.Label>Restaurant Phone</Form.Label>
                      <Form.Control type="tel" defaultValue={this.props.restaurant.contactInfo.phone} required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control defaultValue={this.props.restaurant.contactInfo.address} required />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control defaultValue={this.props.restaurant.contactInfo.city} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formState">
                      <Form.Label>Province</Form.Label>
                      <Form.Control as="select" defaultValue={this.props.restaurant.contactInfo.state} required>
                        <option>AB</option>
                        <option>BC</option>
                        <option>MB</option>
                        <option>NB</option>
                        <option>NL</option>
                        <option>NS</option>
                        <option>NT</option>
                        <option>NU</option>
                        <option>ON</option>
                        <option>PE</option>
                        <option>QC</option>
                        <option>SK</option>
                        <option>YT</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPCode">
                      <Form.Label>Postal Code</Form.Label>
                      <Form.Control type="input" defaultValue={this.props.restaurant.contactInfo.postalCode} required />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formLat">
                      <Form.Label>Latitude</Form.Label>
                      <Form.Control defaultValue={this.props.restaurant.contactInfo.lat} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLng">
                      <Form.Label>Longitude</Form.Label>
                      <Form.Control defaultValue={this.props.restaurant.contactInfo.lng} required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formParty">
                      <Form.Label>Maximum Party Allowed</Form.Label>
                      <Form.Control type="number" min="1" defaultValue={this.props.restaurant.reservationInfo.maxParty} required />
                    </Form.Group>

                  </Form.Row>

                  <Form.Group controlId="formTimeSlot">
                    <Form.Label>Select All Appropriate Time Slots</Form.Label>
                    <Form.Control as="select" defaultValue={this.props.restaurant.reservationInfo.timeSlots} multiple required>
                      <option>0800</option>
                      <option>0900</option>
                      <option>1000</option>
                      <option>1100</option>
                      <option>1200</option>
                      <option>1300</option>
                      <option>1400</option>
                      <option>1500</option>
                      <option>1600</option>
                      <option>1700</option>
                      <option>1800</option>
                      <option>1900</option>
                      <option>2000</option>
                      <option>2100</option>
                      <option>2200</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                    </Button>
                  <Button variant="light"
                    onClick={() => this.goBack()}>Back</Button>
                </Form>
              </Container>
            </div>
          </Intro>
        )
      }
    } else {
      return (<Owner />)
    }
  }
}
