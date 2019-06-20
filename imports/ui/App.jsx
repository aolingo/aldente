import React from 'react';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import SignUp from './components/Header/Menu/SignUp'
import Login from './components/Header/Menu/Login'
import NoMatch from './components/NoMatch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;