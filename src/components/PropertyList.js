import React, { Component } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";

export default class PropertyList extends Component {
  state = {
    properties: [],
    foundProperties: [],
    searchTerm: ""
  };

  componentDidMount = () => {
    axios.get("/properties").then(response => {
      this.setState({
        properties: response.data,
        foundProperties: response.data
      });
    });
  };

  handleSearchChange = e => {
    let allProperties = this.state.properties;
    let term = e.target.value.trim().toLowerCase();
    let foundProperties;
    if (term.length > 0) {
      foundProperties = allProperties.filter(property => {
        let condition = property.name.toLowerCase().includes(term);
        condition |= property.destination.toLowerCase().includes(term);
        return condition;
      });
    } else {
      foundProperties = allProperties;
    }
    this.setState({ foundProperties });
  };

  render() {
    let properties = this.state.foundProperties;
    let itemsToDisplay;
    if (properties.length) {
      itemsToDisplay = properties.map((property, index) => (
        <PropertyCard
          name={property.name}
          destination={property.destination}
          key={property.id}
          id={property.id}
        />
      ));
    } else {
      itemsToDisplay = null;
    }
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="text-center mb-3">Kalkulacija cijene smještaja</h1>
            <p className="form-row justify-content-md-center">
              <input
                type="text"
                className="form-control col-sm-12 col-md-6 form-control-lg"
                name="searchTerm"
                id="searchTerm"
                placeholder="Pretraga"
                onChange={this.handleSearchChange}
              />
            </p>
            {!itemsToDisplay && (
              <div className="alert alert-warning" role="alert">
                Nema rezultata pretrage!
              </div>
            )}
          </div>
        </div>

        {itemsToDisplay && <div className="row">{itemsToDisplay}</div>}
      </div>
    );
  }
}
