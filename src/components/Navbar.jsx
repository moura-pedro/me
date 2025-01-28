import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="name">
      <Link to="/">pedro moura</Link>
    </div>
    <div className="links">
      <Link to="/resume">work</Link>
      <Link to="/blog">blog</Link>
      <Link to="/reading">reading</Link>
      <Link to="/pics">pics</Link>
    </div>
  </nav>
);

export default Navbar;
