import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/historia">História</Link></li>
          <li><Link to="/eventos-oficinas">Eventos e Oficinas</Link></li>
          <li><Link to="/como-se-voluntariar">Como se Voluntariar</Link></li>
          <li><Link to="/parceiros">Parceiros</Link></li>
          <li><Link to="/contatos">Contatos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
