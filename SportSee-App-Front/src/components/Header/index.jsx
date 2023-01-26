import React from "react";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__block-logo">
        <img src={logo} alt="Logo SportSee" />
      </div>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
