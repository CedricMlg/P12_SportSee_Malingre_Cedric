import React from "react";
import logo from "../../assets/logo.png";

/**
 * It returns a header element with a logo, and a nav element with a list of links.
 * @returns A React component.
 */
function Header() {
  return (
    <header className="header">
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
    </header>
  );
}

export default Header;
