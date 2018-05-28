import React, { Component } from "react";

export default class PropertySearchForm extends Component {
  render() {
    let destinationOptions = this.props.destinations.map((dest, index) => {
      return (
        <option value={dest} key={index}>
          {dest}
        </option>
      );
    });
    return (
      <form>
        <p className="form-row justify-content-md-center">
          <input
            type="text"
            className="form-control col-sm-12 col-md-6 form-control-lg"
            name="searchTerm"
            id="searchTerm"
            placeholder="Pretraga"
            value={this.props.searchTerm}
            onChange={this.props.searchChange}
          />
        </p>

        <p className="form-row justify-content-md-center">
          <select
            name="destination"
            id="destination"
            className="form-control col-sm-12 col-md-6 form-control-lg"
            value={this.props.selectedDestination}
            onChange={this.props.destinationChange}
          >
            <option value="sve">Sve</option>
            <optgroup label="Destinacije">{destinationOptions}</optgroup>
          </select>
        </p>
      </form>
    );
  }
}
