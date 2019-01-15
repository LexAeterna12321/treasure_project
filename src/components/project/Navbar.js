import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-1">
        <Link to="/" className="brand-logo" style={{ marginLeft: "20px" }}>
          Treasure Project
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/signin">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/treasures">Your Treasures</NavLink>
          </li>
          <li>
            <NavLink to="/addtreasure">Add Treasure</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
