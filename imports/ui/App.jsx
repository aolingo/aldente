import React from 'react';
import { Menu } from './components/Menu';
import Home from './components/Pages/Homepage/Home';
import About from './components/Pages/About';
import NoMatch from './components/Pages/NoMatch';
import Customer from './components/Pages/Dashboard/Customer';
import Owner from './components/Pages/Dashboard/Owner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Pages/Contact';
import Restaurant from './components/Pages/Restaurants/Restaurant';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import NoMatch from './components/Pages/NoMatch';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/dashboard/customer' component={Customer} />
        <Route path='/dashboard/owner' component={Owner} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/restaurant=:id' component={Restaurant} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
