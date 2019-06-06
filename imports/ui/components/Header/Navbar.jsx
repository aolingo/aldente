import React, { Component } from 'react'
import SignUp from './SignUp'
import Login from './Login'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <Login />
      </div>
    )
  }
}
