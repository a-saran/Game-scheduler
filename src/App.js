import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Team from "./components/team";
import TeamDetails from "./components/teamDetails";
import { Provider } from "react-redux";
import store from "./store";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" component={Team} exact />
              <Route path="/team-details" component={TeamDetails} exact />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
