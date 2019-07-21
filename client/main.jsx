import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../imports/ui/reducers';
import App from '/imports/ui/App'
import '../imports/startup/accounts-config';

function main() {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
}

Meteor.startup(() => {
  render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>,
    document.getElementById('react-target')
  );
});
