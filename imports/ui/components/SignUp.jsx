import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class SignUp extends Component {
  render() {
    return (
      <Container>
        <Row md ={{offset: 1}}>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="su-container">
              <form className="su-form">
                <div className="su-row1">
                  <h3>Sign Up</h3>
                </div>
                <div className="su-row2">
                  <input type="text" id="inputFName" class="form-control" placeholder="First Name" required autofocus/>
                </div>
                <div className="su-row3">
                  <input type="text" id="inputLName" class="form-control" placeholder="Last Name" required autofocus/>
                </div>
                <div className="su-row4">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                </div>
                <div className="su-row5">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required autofocus/>
                </div>
                <div className="su-row6">
                  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}