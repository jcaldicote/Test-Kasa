import React from "react";
import "./Navbar.scss";
import logokasa from "../assets/logokasa.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/Test-Kasa/">
        <div className="navbar__logo">
          <img src={logokasa} alt="logokasa" />
        </div>
      </NavLink>
      <NavLink to="/Test-Kasa/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/Test-Kasa/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
