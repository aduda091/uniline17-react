import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <a className="navbar-brand" href="/">
        <img
          src="http://static.uniline-cdn.eu/images/2016/logo.png"
          alt="Uniline logo"
          height="40px"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Početna
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
