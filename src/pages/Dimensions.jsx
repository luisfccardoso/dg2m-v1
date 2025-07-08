import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './Main.css';

const Dimensions = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <header className="main-header">
        <h1>Dimensões do DG2M</h1>
        <p>
          Para avaliar os níveis de maturidade, foram desenvolvidas seis dimensões...
        </p>
      </header>

      <div className="dimensions-wrapper">
        {}
        <button className="hamburger" onClick={toggleMenu}>
          ☰ Dimensões
        </button>

        <nav className={`sidebar ${menuOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links1">
            <li><Link to="/strategy">Estratégia e Governança de Dados</Link></li>
            <li><Link to="/people">Equipes, Pessoas e Estrutura Organizacional</Link></li>
            <li><Link to="/formalization">Formalização e Processos de Gestão de Dados</Link></li>
            <li><Link to="/quality">Qualidade dos Dados</Link></li>
            <li><Link to="/infrastructure">Infraestrutura de Dados</Link></li>
            <li><Link to="/open">Dados Abertos</Link></li>
          </ul>
        </nav>

        <main className="dimension-content">
          <h2>Escolha uma das dimensões ao lado.</h2>
        </main>
      </div>
    </div>
  );
};

export default Dimensions;
