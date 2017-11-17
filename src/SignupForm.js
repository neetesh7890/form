import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props) {
      super(props);
      this.state={ 
        username: '' ,
        email: '',
        password: '',
        address: ''
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
      e.preventDefault();
      console.log(this.state);
    }

  createEndUser = () => {
    axios.post(
      'http://localhost:3000/auth',
        {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password,
          address: this.state.address
        }
    )
    .then(response => {
      if (response.status === 200 && response.headers["access-token"] != null ){
        console.log(response);
        debugger

        const location = {
              pathname: '/',
              state: { from: {pathname: '/signupform'} }
          }
        this.props.history.push(location);
      }
    })
    .catch(error => console.log(error))
  }

  signOut = (id) => {
    axios({
      method: 'delete',
      url: 'http://localhost:3000/auth/sign_out',
      headers: {
        'access-token': "eR-08PKct24dcspIhfeXZw" ,
        'uid': "sfdjl@gmail.com",
        'client': "ScvFtyxMwsaKAm_tAwXx7g"
      }
    })
    .then(response => {
        console.log(response);
        debugger
      })
    .catch(error => console.log(error))
  }
 

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Link to={''} className="button" onClick={this.signOut}>Signout</Link>
        
        <h1> Join us</h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Address</label>
          <input
            value={this.state.address}
            onChange={this.onChange}
            type="text"
            name="address"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg" onClick={this.createEndUser}>
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
