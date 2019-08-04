import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import SignIn from './Auth/SignIn';
import { withTracker } from 'meteor/react-meteor-data';
import { Tracker } from 'meteor/tracker';

const Styles = styled.div`
  .navbar {
    width: 100%;
    top: 0;
    background-color: #cdedfd;
    background-image: linear-gradient(319deg, #cdedfd 0%, #ffec82 37%, #ffcfd2 100%);
  }
  .navbar-brand {
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
  }

  a, .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: #2E76CF;
    }
  }
`;

userId = Meteor.userId();

// Tracker.autorun(() => {
//   if (Meteor.user()) {
//     console.log("you are now logged in, refresh page")
//   }
// });

export class Menu extends Component {

  // If user is logged in, display their appropriate dashboards
  showDashboard() {
    if (userId != null) {
      if (userId != null) {
        return (
          <Nav className="nav navbar-nav pull-right">
            <Nav.Item><Nav.Link href="/dashboard/owner">Owner Dashboard</Nav.Link></Nav.Item>
          </Nav>
        );
      } else {
        return (
          <Nav className="nav navbar-nav pull-right">
            <Nav.Item><Nav.Link href="/dashboard/customer">Customer Dashboard</Nav.Link></Nav.Item>
          </Nav>
        );
      }
    }
  }

  render() {
    return (
      <Styles>
        <Navbar className="navbar fixed-top navbar-light">
          <Navbar.Brand href="/">
            <img src="/imgs/logo-Aldente1.png" width="250" className="d-inline-block align-top" alt="Al Dente Logo" />
          </Navbar.Brand>
          <SignIn />

          <Nav className="ml-auto">
            <Nav.Item> <Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/dashboard/customer">Customer Dashboard</Nav.Link></Nav.Item>
          </Nav>
          {this.showDashboard()}
        </Navbar >
      </Styles>
    )
  }
}

export default withTracker(() => {
  if (Meteor.user()) {
    console.log("you are now logged in, refresh page")
  }
  Meteor.subscribe('userData');
  return {
    currentUser: Meteor.user(),
  };
})
