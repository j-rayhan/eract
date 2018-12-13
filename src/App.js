// @flow
import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";
import { GEOIP_SERVICE_URL } from "./config";

class App extends Component {
  state = {
    userLocation: ""
  };
  componentDidMount() {
    fetch(GEOIP_SERVICE_URL)
      .then(response => response.json())
      .then(data => this.setState({ userLocation: data }));
  }
  render() {
    console.log("PRINT IN %s=====>", "App", this.state);
    console.log("PRINT IN %s=====>", "App", GEOIP_SERVICE_URL);
    return (
      <div className="App">
        <a>Learn React</a>
        <ButtonExampleEmphasis />
      </div>
    );
  }
}

const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
);

export default App;
