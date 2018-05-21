import React, { Component } from "react";
import axios from "axios";

export default class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.propertyId = this.props.match.params.propertyId;
    this.state = {
      id: this.propertyId,
      name: "",
      destination: "",
      units: []
    };
  }

  componentDidMount = () => {
    axios.get("/properties/" + this.propertyId).then(res => {
      let property = res.data;
      this.setState({
        id: property.id,
        name: property.name,
        destination: property.destination,
        units: property.units
      });
    });
  };
  render() {
    return <div>Property details for: {this.state.name}</div>;
  }
}
