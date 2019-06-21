import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const Styles = styled.div`
  @media (max-width: 900px) {
    .carousel {
      width:auto;
      height:auto;
    }
}
`;

export default class Slide extends Component {
  render() {
    return (
      <Styles>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://deliverydecomida.files.wordpress.com/2014/10/italian-pizza.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://cbsnews1.cbsistatic.com/hub/i/2017/05/12/f9e143b5-9392-478e-8b5a-941e6986c4df/istock-511991334.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Styles>
    )
  }
}
