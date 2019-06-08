import React, { Component } from 'react'
import Slideshow from './Slideshow'
import SignUp from './Header/SignUp'
import Login from './Header/Login'
import { Switch, Route } from 'react-router-dom';

export default class Body extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Slideshow} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    )
  }
}
