import React, { Component } from "react";
import axios from "axios";
import "../CSS/login.css"
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:3300/api/login", {
        username: `${this.state.username}`,
        password: `${this.state.password}`
      })
      .then(res => {
        console.log(res.data);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    this.setState({
      username: "",
      password: ""
    });

  };

  render() {
    return (
      <div className="loginpage">
      <h1>Super Krazy Jokes yo</h1>
        <form className="login">
          <input
            onChange={this.handleInputChange}
            name="username"
            placeholder=" username"
          />
          <input
            type="password"
            onChange={this.handleInputChange}
            name="password"
            placeholder=" password"
          />
          
            <button onClick={this.login}>Sign In</button>
            <p>Not a member? Register <Link to="/register">here</Link> for $59.99/mo</p>
          
        </form>
      </div>
    );
  }
}

export default Login;
