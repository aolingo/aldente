import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const Styles = styled.div`
  @media (max-width: 960px) {
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
        <Carousel className="slideshow">
          <Carousel.Item>
            <div className="vertical-crop slideshow-height">
              <img
                src="https://farm3.staticflickr.com/2882/11302596064_7aac176bf6_b.jpg"
                alt="First slide"
                className="width100 farmer"
              />
            </div>
            <Carousel.Caption>
              <h3>Farmer's Apprentice</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="vertical-crop slideshow-height">
              <img
                src="https://foodsntales.files.wordpress.com/2013/04/sushi-the-best1.jpg"
                alt="Second slide"
                className="width100"
              />
            </div>
            <Carousel.Caption>
              <h3>Sushi Bar Shu</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="vertical-crop slideshow-height">
              <img
                src="https://resizer.otstatic.com/v2/photos/large/24929017.jpg"
                alt="Third slide"
                className="width100 bauhaus-slideshow"
              />
            </div>
            <Carousel.Caption>
              <h3>Bauhaus Restaurant</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Styles >
    )
  }
}
