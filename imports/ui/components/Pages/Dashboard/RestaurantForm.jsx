import React, { Component } from 'react';
import styled from 'styled-components';
import { Restaurants } from '../../../../api/restaurants';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import '../../../css/restaurantForm.css';
import Swal from 'sweetalert2';

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
    this.state = {
      editFlag: false,
      restaurant: {},
    }
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
    }
  }

  render() {
    return (
      <Intro>
        {/* <div className="col-md-4 container-preview">
          <div>
            <p>Preview: </p>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="vertical-crop-card">
              <img className="bd-placeholder-img card-img-top" src="https://lh3.googleusercontent.com/s2NmKhqpCmed2-dACsr3YjMIU59CVNb3vZ79Yqv7svnolnm-z_3LiBaVOeptqjHPRPOFYCHx8GbxTDr4cX0bfEDMeTc=e7-v1-rw-w576-h384-n" />
            </div>
            <div className="card-body">
              <p className="card-text">Chipotle Grill</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Burnaby, BC</small>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline" data-toggle="modal" data-target="#restaurantModal" onClick={() => this.props.handler(this.props.id)}>View</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="form">
          <Container>
            <h1>Create A New Restaurant</h1>
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
                  <Form.Control type="input" placeholder="Recommend at least 800x600" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formPhoto2">
                  <Form.Label>Restaurant Header Picture URL</Form.Label>
                  <Form.Control type="input" placeholder="Recommend at least 800x600" required />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formWebsite">
                  <Form.Label>Restaurant Website</Form.Label>
                  <Form.Control type="input" placeholder="a1dente.herokuapp.com" required />
                </Form.Group>
                <Form.Group as={Col} controlId="formPhone">
                  <Form.Label>Restaurant Phone</Form.Label>
                  <Form.Control type="tel" placeholder="604-224-1322" required />
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
            </Form>
          </Container>
        </div>
      </Intro>
    )
  }
}