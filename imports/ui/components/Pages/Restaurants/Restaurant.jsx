import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Restaurants } from '../../../../api/restaurants';
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
    console.log(this.props);
    this.state = {
      id: this.props.match.params.id,
      showReservation: false
    }
  }

  closeModal = () => {
    this.setState({showReservation: false});
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
                  <Form className="margin-top-20">
                    <Form.Group controlId="formPlaintextEmail">
                      <Form.Control size="lg" placeholder="# of Guests" />
                    </Form.Group>
                    <Button variant="success" type="submit" className="width100">
                      Search Reservations
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
