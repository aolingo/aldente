import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
  
    &:hover {
      color: white
    }
  }
`;

export default class Menu extends Component {
  render() {
    return (
      <Styles>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
      </Styles >
    )
  }
}
