import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Header from "../src/components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Header />
          <Switch>
            <Route exact path = "/" component={Search}/>
            <Route path = "/saved" component={Saved}/>
          </Switch>
        </div>

      </Router>
    );
  }
}

export default App;
