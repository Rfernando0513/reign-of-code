import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">Reign of Code</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </div>

      <nav className={menuOpen ? 'active' : ''}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Início</a></li>
          <li><a href="#about" onClick={toggleMenu}>Sobre Nós</a></li>
          <li><a href="#services" onClick={toggleMenu}>Serviços</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;