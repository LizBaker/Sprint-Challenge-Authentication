import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./components/login";
import Jokes from "./components/jokes";
import Register from "./components/register";



class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }
  
  render() {
    return (
      <div className="App">

        <Route exact path="/login" component={Login} />
        <Route exact path="/jokes" component={Jokes} />
        <Route exact path="/register" component={Register}/>
      </div>
    );
  }
}

export default App;
