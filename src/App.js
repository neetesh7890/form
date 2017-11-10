import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignupForm from './SignupForm';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default App;
