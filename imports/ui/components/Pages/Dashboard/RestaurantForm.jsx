import React, { Component } from 'react';
import styled from 'styled-components';
import { Restaurants } from '../../../../api/restaurants';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';


const Intro = styled.div`
  .form {
    padding-top: 75px;
    background-image: url(/imgs/bg.jpg);
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
          timeSlots: [0800, 0900, 1000, 1800, 1900, 2000, 2100, 2200],
          maxParty: event.target.formParty.value,
          closedDays: [],
        },
      })
    }
  }

  render() {
    return (
      <Intro>
        <div className="form">
          <h1>Restaurant Form</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formRestaurantId">
              <Form.Label>Restaurant ID</Form.Label>
              <Form.Control type="input" placeholder="eg. poplargrovewinery" required />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Restaurant Name</Form.Label>
              <Form.Control type="input" placeholder="Enter restaurant name" required />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Restaurant Description</Form.Label>
              <Form.Control as="textarea" rows="3" required />
            </Form.Group>

            <Form.Group controlId="formPhoto">
              <Form.Label>Restaurant Card Picture</Form.Label>
              <Form.Control type="input" placeholder="Enter card picture url" required />
            </Form.Group>

            <Form.Group controlId="formPhoto2">
              <Form.Label>Restaurant Header Picture</Form.Label>
              <Form.Control type="input" placeholder="Enter header picture url" required />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Restaurant Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" required />
            </Form.Group>

            <Form.Group controlId="formWebsite">
              <Form.Label>Restaurant Website</Form.Label>
              <Form.Control type="input" placeholder="Enter website link" required />
            </Form.Group>

            <Form.Group controlId="formPCode">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="input" placeholder="Enter postal code of restaurant" required />
            </Form.Group>

            <Form.Group controlId="formState">
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

            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Saint-Louis-du-Ha! Ha!" required />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" required />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formLat">
                <Form.Label>Latitude</Form.Label>
                <Form.Control placeholder="49.5123363" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formLng">
                <Form.Label>Longitude</Form.Label>
                <Form.Control placeholder="-119.5760359" required />
              </Form.Group>
            </Form.Row>

            <Form.Row>
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

              <Form.Group as={Col} controlId="formParty">
                <Form.Label>Maximum Party</Form.Label>
                <Form.Control type="number" min="1" required />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>
        </div>
      </Intro>
    )
  }
}
