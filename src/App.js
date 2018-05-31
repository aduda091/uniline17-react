import React, { Component } from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PropertyList from "./components/PropertyList/PropertyList";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <header className="App-header">
            <Navbar />
          </header>
          <main>
            <Route exact path="/" component={PropertyList} />
            <Route
              exact
              path="/property/:propertyId"
              component={PropertyDetails}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
