import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../CSS/jokes.css'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }
    componentDidMount() {
      const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get("http://localhost:3300/api/jokes", reqOptions)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(error => {
        console.error("Server Error", error);
      });
    }

  logout = () => {
    localStorage.clear()
  }

  render() {
    return (
      <div className="jokespage">
        <h1>Crazy Kool Jokes</h1>
        <div className="jokes">
          {this.state.jokes.map(joke => (
            <div className="joke">
            <div className="setup">Q: {joke.setup}</div>
            <div className="punchline">A: {joke.punchline}</div>
            </div>
          ))}
        </div>
        {this.state.jokes.length === 0 ? (
          <div><h1>Please log in to view the jokes</h1>
          <Link to="/login">
            <button>log in</button>
          </Link></div>
        ) : (
          <Link className="logout" to="/login">
            <button onClick={this.logout}>log out</button>
          </Link>
        )}
      </div>
    );
  }
}

export default Login;
