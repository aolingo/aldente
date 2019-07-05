import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'

const LoginStyle = styled.div`
  .login-form {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    height: 100%;
  }

  .login-box {
  width: 100%;
  max-width: 330px;
  border-width:2px;
  border-style:solid;
  border-color:black;
  }

`;

export default class Login extends Component {
  render() {
    return (
      <LoginStyle>
        <Container>
          <h1 className="text-center">Login Here!</h1>
          <Form className="login-form login-box">
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
            <FacebookLoginButton className="mt-3 mb-3" />
            <div className="text-center">
              <a href="/signup">Sign Up</a>
              <span className="p-2">|</span>
              <a href="/signup">Forgot Password</a>
            </div>
          </Form>
        </Container>
      </LoginStyle>
    )
  }
}