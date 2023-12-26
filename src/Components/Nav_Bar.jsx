import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav_Bar.css";

const Nav_bar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-danger fs-2" to="/" exact>
          Brief
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/business">
                Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/entertainment">
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/health">
                Health
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/science">
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sports">
                Sports
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technology">
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav_bar;
