import React, { Component } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";

export default class PropertyList extends Component {
  state = {
    properties: []
  };

  componentDidMount = () => {
    axios.get("/properties").then(response => {
      this.setState({ properties: response.data });
    });
  };

  render() {
    let properties = this.state.properties;
    let items = properties.map((property, index) => (
      <PropertyCard
        name={property.name}
        destination={property.destination}
        key={property.id}
        id={property.id}
      />
    ));
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Kalkulacija cijene smještaja</h1>
            <p className="lead">
              Turistička agencija nudi gostima smještaj u velikom broju
              smještajnih objekata. Osim osnovne cijene, cjenici turističkog
              smještaja obično sadrže popuste i doplate, a u izračunu konačnog
              iznosa potrebno je obratiti pozornost i na druge stavke, kao što
              je npr. boravišna taksa.
            </p>
          </div>
        </div>

        <div className="row">{items}</div>
      </div>
    );
  }
}
