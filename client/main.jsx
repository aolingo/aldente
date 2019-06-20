import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '/imports/ui/App'
import 'bootstrap/dist/css/bootstrap.min.css'

function main() {
  return (
    <div>
      <Provider store={Store}>
        <App />
      </Provider>
    </div>
  );
}

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'));
});
