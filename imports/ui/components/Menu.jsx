import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import AccountsUIWrapper from './Auth/AccountsUIWrapper';

const Styles = styled.div`
  .navbar {
    background-color: #e3f2fd;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: #2E76CF;
    }
  }
`;

export default class Menu extends Component {
  render() {
    return (
      <Styles>
        <Navbar className="navbar navbar-light">

          <Navbar.Brand href="/">
            <img src="https://aldenteofrye.com/wp-content/uploads/2019/04/logo-Aldente1.png" width="250" className="d-inline-block align-top" alt="Al Dente Logo" />
          </Navbar.Brand>

          <Nav variant="pills" className="ml-auto">
            <Nav.Item> <Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link href="/signup">Sign Up</Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link href="/login">Log In</Nav.Link></Nav.Item>
            <Nav.Item> <AccountsUIWrapper /> </Nav.Item>
            <Nav.Item> <Nav.Link href="/about">About</Nav.Link></Nav.Item>
            <Nav.Item> <Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
          </Nav>
        </Navbar >
      </Styles>
    )
  }
}
