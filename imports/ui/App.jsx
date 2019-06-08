import React from 'react';
import './ui.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Home />
    </div>
  </Router>
);

export default App;
