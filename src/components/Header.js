import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/images/Logo.jpeg'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.centerSection}>
          <input type="text" placeholder="Buscar..." />
          <button className={styles.searchBtn}>Buscar</button>
        </div>

        <div className={styles.rightSection}>
          <button className={styles.actionBtn}>Login</button>
          <Link to="/contatos" className={styles.actionBtn}>Contato</Link>
        </div>
      </nav>

        
        <ul className={styles.menu}>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/historia">História</Link></li>
          <li><Link to="/eventos-oficinas">Eventos e Oficinas</Link></li>
          <li><Link to="/como-se-voluntariar">Como se Voluntariar</Link></li>
          <li><Link to="/parceiros">Parceiros</Link></li>
          <li><Link to="/contatos">Contatos</Link></li>
        </ul>
     
    </header>
  );
};

export default Header;
