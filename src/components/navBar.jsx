import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav container">
      <li className="nav-item d-flex">
        <Link className="nav-link fs-3" to="/" >Main</Link>
        <Link className="nav-link fs-3" to="/login" >Login</Link>
        <Link className="nav-link fs-3" to="/users" >Users</Link>
      </li>
    </ul>
  );
};

export default NavBar;