import React from "react";

const Nav = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <a href="#">
          <img src="../../public/images/brand_logo.png" alt="Nike Logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">Location</a>
        </li>
        <li className="nav-link">
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="btn-container">
        <button className="btn">Log In</button>
      </div>
    </nav>
  );
};

export default Nav;
