import React, { Component } from 'react'
import '../../css/about.css'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

export default class About extends Component {



  render() {
    return (
      <div className="margin-text">
        <img src="/imgs/Logo.png" width="2500" className="d-inline-block align-top" />
        <Container>
          <h4>THE BUISNESS OF GOOD FOOD</h4>
          <div className="">
            <p>We aim to making reservations at local restaurants a simple task. Restaurant owners can add restaurants, manage, reserve and organize their buisness based on their personalized needs.</p>
          </div>
          <h4 className="text-align: center">Project Description</h4>
          <div className="">
            <h6>The project is a reservation platform for restaurants. There will be two type of users, customers and restaurant/business owners. Both of which will have their own separate account portal once they signed up for an account on the website. For customers, they will be able to browse through restaurants displayed on the platform (basic restaurant information) and make a reservation through the website's system. Customers will then be able to see their list of made reservations (including past reservations) on their account page. For restaurant owners, once they log in to the system, they will be able to see and manage reservations made at their diners.</h6>
          </div>
          <Row className="margin-top-50 margin-bottom-50">
            <Col>
              <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '372px' }}>
                <div className="vertical-crop maxheight180">
                  <Card.Img variant="top" src="https://www.parisperfect.com/g/photos/upload/914281088-1500962405-Restaurant-reservation-service-paris.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Reserve a table at your favourite restaurant</Card.Title>
                  <Card.Text>
                    Al Dente provides easy to use interface for quick and simple bookings.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '372px' }}>
                <div className="vertical-crop maxheight180">
                  <Card.Img variant="top" src="https://www.scandichotels.com/imagevault/publishedmedia/qn6infvg30381stkubky/scandic-sundsvall-city-restaurant-verket-10.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Market you restaurant</Card.Title>
                  <Card.Text>
                    Show off your restaurant to the world through our unique restaurant page.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '372px' }}>
                <div className="vertical-crop maxheight180">
                  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                </div>
                <Card.Body>
                  <Card.Title>Techonolgies Used</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Meteor</li>
                      <li>React JS</li>
                      <li>Bootstrap</li>
                      <li>datatables.net</li>
                      <li>Google Maps</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}