import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';


export default class Login extends Component {
  render() {
    return (
      <div className="login-box">
      <Form className="login-form">
      <FormGroup>
      <Label className="control-label col-sm-2">Email</Label>
        <div className="col-md-10">   
        <Input className="form-control form-control-lg" type="email" placeholder="Email" />
        </div>   
      </FormGroup>
      <FormGroup>
        <Label className="control-label col-sm-2">Password</Label>
        <div className="col-md-10">   
        <Input className="form-control form-control-lg" type="password" placeholder="Password" />
        </div>   
      </FormGroup>
      <Button className="btn-lg btn-block">Log In</Button>
      <div className="text-center pt-3">
        Or continue with your Social Account
      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
          <a href="/signup">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/signup">Forgot Password</a>
        </div>
      </Form>
      </div>
    )
  }
}
