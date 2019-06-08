import React, { Component } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Route, NavLink, HashRouter } from "react-router-dom";
import '../../css/ui.css'


export default class Navbar extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <header className="masthead mb-auto">
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
              <NavLink className="link-space" to="/Home">Home</NavLink>
              <NavLink className="link-space" to="/SignUp">Sign Up</NavLink>
              <NavLink className="link-space" to="/Login">Login</NavLink>
            </nav>
            <Route exact path="/Login" component={Login}/>
            
          </div>
        </header>
      </div>
    </HashRouter>
    )
  }
}
