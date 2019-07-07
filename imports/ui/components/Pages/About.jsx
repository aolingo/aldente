import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';

import { Info } from '../../../api/aboutus';

class About extends Component {



  render() {
    return (
      <div>
        {
          this.props.info.map((val) => (
            <p>{val.title}</p>
          ))
        }
      </div>
    )
  }
}

export default withTracker(() => {

  return {
    info: Info.find().fetch(),
  };

})(About);