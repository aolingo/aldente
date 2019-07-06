import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Slide from './Slide'

export default class Slideshow extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Slide />
                    </Col>
                </Row>
            </Container>
        );
    }
}