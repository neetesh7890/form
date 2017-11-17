import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SignupForm from './SignupForm';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import axios from 'axios';

class App extends Component {

  

  render() {
    return (
      <Router>
        <div className="row">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to={'/'} className="navbar-brand">My Website</Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><Link to={'/'}>Home</Link></li>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><Link to={'/signupform'}>Signup</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
              </ul>
            </div>
          </nav>
 
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/signupform' component={SignupForm} />
              <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
