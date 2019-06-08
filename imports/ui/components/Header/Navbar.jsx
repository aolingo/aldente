import React, { Component } from 'react'
import SignUp from './SignUp'
import Login from './Login'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="masthead mb-auto">
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Sign Up</a>
              <a className="nav-link" href="#">Log In</a>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
