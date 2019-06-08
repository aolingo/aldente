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
        <Body />
        <Footer />
      </div>
    )
  }
}
