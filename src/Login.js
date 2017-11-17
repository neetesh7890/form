import React, { Component } from 'react';
import axios from 'axios';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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


  render() {
    return(
        <form>    
          <h1> Login here...</h1>
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
              type="text"
              name="password"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-lg" onClick={this.login}>
              Log in
            </button>
          </div>
        </form>
      );

  }

}

export default Login;