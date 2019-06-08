import React, { Component } from 'react'
import Header from './Header/Header'
import Slideshow from './Slideshow'
import Body from './Body'
import Footer from './Footer'
import 'bootstrap'


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slideshow />
        <main role="main" className="container">
          <Body />
        </main>
        <Footer />
      </div>
    )
  }
}
