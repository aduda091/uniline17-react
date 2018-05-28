import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PropertyCard extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card text-center shadow">
          <div className="card-header">
            <h5>{this.props.destination}</h5>
          </div>
          <Link to={"/property/" + this.props.id}>
            <img
              className="card-img-top"
              src={"https://loremflickr.com/320/240/sea?lock=" + this.props.id}
              alt={this.props.name}
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
