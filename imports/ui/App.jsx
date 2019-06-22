import React from 'react';
import Menu from './components/Menu';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
import SignUp from './components/SignUp'
import Login from './components/Login'
import NoMatch from './components/NoMatch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => (
  <React.Fragment>
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  </React.Fragment>
);

export default App;