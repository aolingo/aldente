import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import SignIn from './Auth/SignIn';
import { Tracker } from 'meteor/tracker';
import { Redirect } from 'react-router';

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
// Flags for redirecting after user login and log out
userId = Meteor.userId();
loggedIn = false;
if (userId != null) {
  loggedIn = true;
}

Tracker.autorun(() => {
  userId = Meteor.userId();
  if (Meteor.user() && !loggedIn) {
    location.reload();
  }
  if (Meteor.userId() == null && loggedIn) {
    window.location.href = '/'
  }
});

export class Menu extends Component {

  // If user is logged in, display their appropriate dashboards
  showDashboard() {
    if (userId != null) {
      if (userId === '2uqqAQpxi3hdNWxRd') {
        return (
          <div>
            <Nav className="nav navbar-nav pull-right">
              <Nav.Item><Nav.Link href="/dashboard/owner">Owner</Nav.Link></Nav.Item>
            </Nav>
            <Nav className="nav navbar-nav pull-right">
              <Nav.Item><Nav.Link href="/dashboard/customer">Customer</Nav.Link></Nav.Item>
            </Nav>
          </div>
        );
      } else {
        console.log("else")
        return (
          <Nav className="nav navbar-nav pull-right">
            <Nav.Item><Nav.Link href="/dashboard/customer">Customer</Nav.Link></Nav.Item>
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
          </Nav>
          {this.showDashboard()}
        </Navbar >
      </Styles>
    )
  }
}
