import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          Geotech Geospatial
        </Link>
        <nav>
          <ul className="nav">
            <li>
              <Link 
                to="/" 
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about-us" 
                className={location.pathname === "/about-us" ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={location.pathname === "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;