import React, { Component } from "react";
import Owner from './Owner';
import { Container, Button } from 'react-bootstrap';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Cell,
  Bar,
  ScatterChart,
  Scatter
} from "recharts";
import styled from 'styled-components';

const Intro = styled.div`
  .dashboard {
    padding-top: 75px;
    background-image: url(/imgs/bg.jpg);
  }

  h1 {
    color: #23233e;
    text-align: center;
    font-family: "GT America Condensed Bold";
    font-weight: bold;

  }
`;

export default class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDashboard: false
    }
  }

  goBack() {
    event.preventDefault()
    this.setState(prevState => ({
      showDashboard: !prevState.showDashboard
    }))
  }

  getReservationsAtTime(time, reservations) {
    let count = this.props.resArray.filter(res => res.resTimeSlot === time).length
    return count
  }

  render() {
    if (this.state.showDashboard) {
      return (<Owner />)
    }
    else {
      console.log(this.props.resArray);
      let barData = []
      this.props.restaurant.reservationInfo.timeSlots.map((time) => (
        barData.push({
          time: time, 
          reservationCount: this.getReservationsAtTime(time, this.props.resArray)
        })
      ))

      return (
        <Intro>
          <div className="dashboard">
            <Container>
              <Button variant="light"
                onClick={() => this.goBack()}>Back</Button>
              <h1>Busiest Hours</h1>

              <BarChart
                width={1000}
                height={600}
                data={barData}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reservationCount" fill="#8884d8" />
              </BarChart>
            </Container>
          </div>
        </Intro>
      );
    }
  }
}