import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between item-center">
      <div className="logo">Acme</div>
      <ul className="flex justify-between item-center">
        <li>Overview</li>
        <li>
          <Link to="/user-list">Members</Link>
        </li>
        <li>
          <Link to="/job-list">Jobs</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
