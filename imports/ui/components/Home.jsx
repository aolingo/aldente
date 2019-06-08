import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body'
import Footer from './Footer'
import Slideshow from './Slideshow'
import 'bootstrap'


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slideshow />
        <main role="main">
          <Body />
        </main>
        <Footer />
      </div>
    )
  }
}
