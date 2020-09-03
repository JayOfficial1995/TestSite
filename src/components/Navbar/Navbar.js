import React from "react";
import { navbarData } from "../../jsonElements/navbarData";

import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar-section">
      <ul className="navbar-wrapper">
        {navbarData.map((menuItem, index) => (
          <li className="menu-item">
            <a href="#" className="nav-link">
              {menuItem.menuItem}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
