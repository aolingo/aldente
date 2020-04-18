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
                src="https://lh3.googleusercontent.com/s2NmKhqpCmed2-dACsr3YjMIU59CVNb3vZ79Yqv7svnolnm-z_3LiBaVOeptqjHPRPOFYCHx8GbxTDr4cX0bfEDMeTc=e7-v1-rw-w576-h384-n"
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
                src="https://i.pinimg.com/originals/21/4c/6e/214c6e41cf354db5fa3d017d307f098d.jpg"
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
                src="https://images.squarespace-cdn.com/content/v1/549d41a3e4b003c6ce131926/1484567396699-D9M31HW948P1HCAZGQEV/ke17ZwdGBToddI8pDm48kKo6K4nzwH4_qC3GsKGYQ297gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYIIs9GSzFoX1QQ48IpvjVfhKYOpCCKFxshznv23YZGJNKOigyfB8BfAL6B2Stgizg/image-asset.jpeg?format=1500w"
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
