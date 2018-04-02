import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Display from "./Components/Display";
import PageFooter from "./Components/PageFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="display-section">
          <Display />
        </div>

        <PageFooter />
      </div>
    );
  }
}

export default App;
