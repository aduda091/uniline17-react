import React, { Component } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import PropertySearchForm from "./PropertySearchForm";

export default class PropertyList extends Component {
  state = {
    properties: [],
    foundProperties: [],
    searchTerm: "",
    destinations: [],
    selectedDestination: ""
  };

  componentDidMount = () => {
    axios.get("/properties").then(response => {
      this.setState(
        {
          properties: response.data,
          foundProperties: response.data
        },
        () => {
          let destinations = [];
          this.state.properties.forEach(property => {
            let destination = property.destination;
            if (!destinations.includes(destination))
              destinations.push(destination);
          });

          this.setState({ destinations });
        }
      );
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
    this.setState({
      foundProperties,
      searchTerm: term,
      selectedDestination: "sve"
    });
  };

  handleDestinationChange = e => {
    let selectedDestination = e.target.value;
    const shownProperties = this.state.properties;
    let foundProperties;
    if (selectedDestination === "sve" || selectedDestination === "") {
      foundProperties = shownProperties;
    } else {
      foundProperties = shownProperties.filter(property => {
        return property.destination === selectedDestination;
      });
    }

    this.setState({ foundProperties, selectedDestination, searchTerm: "" });
  };

  render() {
    let properties = this.state.foundProperties;
    let itemsToDisplay;
    if (properties.length) {
      itemsToDisplay = properties.map(property => (
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
            <PropertySearchForm
              destinations={this.state.destinations}
              searchTerm={this.state.searchTerm}
              selectedDestination={this.state.selectedDestination}
              searchChange={this.handleSearchChange}
              destinationChange={this.handleDestinationChange}
            />
            {!itemsToDisplay && (
              <div className="alert alert-warning" role="alert">
                Nema pronađenih rezultata!
              </div>
            )}
          </div>
        </div>

        {itemsToDisplay && <div className="row">{itemsToDisplay}</div>}
      </div>
    );
  }
}
