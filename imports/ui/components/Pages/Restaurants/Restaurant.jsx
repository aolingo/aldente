import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { Restaurants } from '../../../../api/restaurants';
import NoMatch from '../NoMatch'
import Reservation from './Reservation'

import {Button, ButtonToolBar} from 'react-bootstrap'

class Restaurant extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      id: this.props.match.params.id,
      showReservation: false
    }
  }

  setShowReservation = () => {
    this.setState({showReservation: false});
  }

  render() {
    console.log(this.state.id);

    let restaurant = Restaurants.find(this.state.id).fetch();
    console.log(restaurant);

    if (restaurant.length > 0) {
      return (
        <React.Fragment>
            <div>
              {
                restaurant.map((val) => (
                  <h1 key='name'>{val.name}</h1>
                ))
              }
            </div>
            <ButtonToolBar>
              <Button>
              </Button>
            </ButtonToolBar>

        </React.Fragment>
      )
    }
    return (
      <NoMatch />
    )
  }
}

export default withTracker(() => {

  return {
    restaurants: Restaurants.find().fetch(),
  };

})(Restaurant);
