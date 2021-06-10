import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1504438878808-ee48579f0f5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt=""
          />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active">
              PortFolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 ManshadChangampalli</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
