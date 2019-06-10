import React from 'react';
import './css/ui.css'
import Home from './components/Home';
import SignUp from './components/Header/SignUp'
import Login from './components/Header/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  </Router>
);

export default App;
