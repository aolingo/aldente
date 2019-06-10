import React, { Component } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="masthead mb-auto">
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
              <Link to="/" className="nav-link active">Home</Link>
              <Link to="/signup" className="nav-link">Sign Up</Link>
              <Link to="/login" className="nav-link">Sign In</Link>
            </nav>            
          </div>
        </header>
      </div>
    )
  }
}
