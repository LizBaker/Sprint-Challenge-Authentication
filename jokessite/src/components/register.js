import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Register extends Component {
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

  register = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/register", {
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
            placeholder="username"
          />
          <input
            type="password"
            onChange={this.handleInputChange}
            name="password"
            placeholder="password"
          />
          <Link to="/jokes">
            <button onClick={this.register}>Register Account</button>
          </Link>
          <p>Already a member? Login <Link to="/login">here</Link></p>
        </form>
      </div>
    );
  }
}

export default Register;
