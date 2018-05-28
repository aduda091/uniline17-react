import React, { Component } from "react";

export default class PropertySearchForm extends Component {
  render() {
    return (
      <form>
        <p className="form-row justify-content-md-center">
          <input
            type="text"
            className="form-control col-sm-12 col-md-6 form-control-lg"
            name="searchTerm"
            id="searchTerm"
            placeholder="Pretraga"
            onChange={this.props.change}
          />
        </p>
      </form>
    );
  }
}
