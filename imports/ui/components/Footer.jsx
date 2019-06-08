import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img className="mb-2" src="https://cdn.pixabay.com/photo/2018/04/06/19/39/symbol-3296656_960_720.png" alt="pizza logo" width="24" height="24" />
              <small className="d-block mb-3 text-muted">&copy; 2019</small>
            </div>

            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Sign Up</a></li>
                <li><a className="text-muted" href="#">Log In</a></li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
