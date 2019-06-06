import React, { Component } from 'react'
import Header from './Header/Header'
import Body from './Body'
import Footer from './Footer'


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
