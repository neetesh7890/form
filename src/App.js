import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SignupForm from './SignupForm';
import Home from './Home';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <Link to={'/'} className="navbar-brand">My Website</Link>
              </div>
              <ul class="nav navbar-nav">
                <li class="active"><Link to={'/'}>Home</Link></li>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><Link to={'/signupform'}>Signup here...</Link></li>
              </ul>
            </div>
          </nav>
 
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/signupform' component={SignupForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
