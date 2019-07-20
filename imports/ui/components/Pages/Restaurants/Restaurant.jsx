import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Restaurants } from '../../../../api/restaurants';
import { Reservations } from '../../../../api/reservations';
import NoMatch from '../NoMatch'
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap'
import styled from 'styled-components';

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

`;

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: this.props.match.params.id,
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (Meteor.user()) {
        Reservations.insert({
          customer: Meteor.userId(),
          resDate: event.target.formDate.value,
          resTimeSlot: event.target.formTime.value,
          restaurantId: this.state.id
        }, function(err, res) {
          if (err) {
            alert("Something went wrong with your booking");
            throw err;
          } else {
            alert("Your booking was successful");
          }
        })
    }
    else {
      alert("Sign In or Create an Account to book a reservation");
    }
  }

  render() {
    console.log(this.state.id);

    let restaurant = Restaurants.find(this.state.id).fetch();
    console.log(restaurant);

    let FontAwesome = require('react-fontawesome');

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
                  <p className="margin-top-20">{restaurant[0].description}</p>
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
                            <td>{`${restaurant[0].contactInfo.city}, ${restaurant[0].contactInfo.state}`}</td>
                          </tr>
                          <tr>
                            <td>
                              <a href={restaurant[0].contactInfo.website}>Website</a>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Col>
                <Col sm="3">
                  <Form className="margin-top-20" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formDate">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" size="lg" required/>
                    </Form.Group>
                    <Form.Group controlId="formTime">
                      <Form.Label>Time</Form.Label>
                      <Form.Control as="select" size="lg" >
                        {restaurant[0].reservationInfo.timeSlots.map((value, index) =>
                          <option key={index}>{value}</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <Button variant="success" type="submit" className="width100">
                      Book Now
                  </Button>
                  </Form>
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
