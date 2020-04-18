import React, { Component } from 'react'
import '../../css/about.css'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'

export default class About extends Component {

  render() {
    return (
      <div className="margin-text">
        <img src="/imgs/Logo.png" width="2500" className="d-inline-block align-top" />
        <Container>
          <h4>The Business of Good Food & Easy Reservations</h4>
          <div className="">
            <h6>We aim to making and managing reservations at local restaurants a simple task for customers and restaurant owners. Restaurant owners can add restaurants, manage, reserve and view analytical graphs of their restuarants from their dashboard</h6>
          </div>
          <h4 className="text-align: center">The Al Dente Team</h4>
          <div className="">
            <h6><a href="https://github.com/aolingo/aldente">Austin, Daniel, George, Stefan</a></h6>
          </div>
          <h4 className="text-align: center">Al Dente Features</h4>
          <div className="">
            <h6>Al Dente is a restaurant reservation platform designed for both customers and restaurant owners. Both of which will have their own dedicated dashboard once they sign up and login on the website.</h6>
            <h6>For customers, they will be able to browse through restaurants displayed on the platform (basic restaurant information) and make a reservation through the website's system. Customers will then be able to see their list of made reservations on their account page.</h6>
            <h6>For restaurant owners, once they log in to the system, they will be able to view and manage reservations made at their diners, update their restaurant's information, add a new restaurant to the front page, and view analytical graphs from their dashboard.</h6>
            <h6>To access the Owner Dashboard, you can use the demo account -> Username: ownerdemo Password: ownerdemo</h6>
          </div>

          <Row className="margin-bottom-50">
            <Col className="margin-top-50" lg="4">
              <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '390px', textAlign: 'center' }}>
                <div className="vertical-crop maxheight180">
                  <Card.Img variant="top" src="https://www.parisperfect.com/g/photos/upload/914281088-1500962405-Restaurant-reservation-service-paris.jpg" />
                </div>
                <Card.Body>
                  <Card.Title>Reserve a table at your favourite restaurant</Card.Title>
                  <Card.Text>
                    Al Dente provides an user friendly UI for quick and simple bookings.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="margin-top-50" lg="4">
              <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '390px', textAlign: 'center' }}>
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
            <Col className="margin-top-50" lg="4">
              <a style={{ cursor: 'pointer' }} onClick={() => window.open("/imgs/dash2.JPG")}>
                <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '390px', textAlign: 'center' }}>
                  <div className="vertical-crop maxheight180">
                    <Card.Img variant="top" src="/imgs/dash2.JPG" />
                  </div>
                  <Card.Body>
                    <Card.Title>Track all your reservations</Card.Title>
                    <Card.Text>
                      Easily view and sort all the reservations customers made at your restaurant.
                  </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>

          <Row className="margin-bottom-50">
            <Col className="margin-top-50" lg="4">
              <a style={{ cursor: 'pointer' }} onClick={() => window.open("/imgs/dash1.JPG")}>
                <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '390px', textAlign: 'center' }}>
                  <div className="vertical-crop maxheight180">
                    <Card.Img variant="top" src="/imgs/dash1.JPG" />
                  </div>
                  <Card.Body>
                    <Card.Title>A centralized dashboard</Card.Title>
                    <Card.Text>
                      You can easily manage all your restaurants personally from the owner dashboard. No more having to contact a third party to make any changes.
                  </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col className="margin-top-50" lg="4">
              <a style={{ cursor: 'pointer' }} onClick={() => window.open("/imgs/dash3.JPG")}>
                <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '390px', textAlign: 'center' }}>
                  <div className="vertical-crop maxheight180">
                    <Card.Img variant="top" src="/imgs/dash3.JPG" />
                  </div>
                  <Card.Body>
                    <Card.Title>Changes are welcomed here</Card.Title>
                    <Card.Text>
                      Need to make a quick update or even create a new restaurant altogether? Don't worry, Al Dente got you covered.
                  </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col className="margin-top-50" lg="4">
              <a style={{ cursor: 'pointer' }} onClick={() => window.open("/imgs/dash4.JPG")}>
                <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '390px', textAlign: 'center' }}>
                  <div className="vertical-crop maxheight180">
                    <Card.Img variant="top" src="/imgs/dash4.JPG" />
                  </div>
                  <Card.Body>
                    <Card.Title>Visualize your data</Card.Title>
                    <Card.Text>
                      Al Dente helps you track the busiest hours of your restaurant so you are better prepared in the future.
                  </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
          <a style={{ cursor: 'pointer' }} onClick={() => window.open("https://github.com/aolingo/cpsc436project")}>
            <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto', height: '390px' }}>
              <div className="vertical-crop maxheight180">
                <Card.Img variant="top" src="https://images.ctfassets.net/2y9b3o528xhq/1YvMlkplkBP1hJrErUQ5hx/ba5dabd879a46f5972e52fcf6ba26b80/nd004_open_graph.jpg" />
              </div>
              <Card.Body>
                <Card.Title style={{ textAlign: 'center' }}>Built with</Card.Title>
                <Card.Text>
                  Meteor <br />
                  MongoDB<br />
                  HTML<br />
                  React, JavaScript<br />
                  CSS, Bootstrap<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Container>
      </div >
    )
  }
}