import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/images/Logo-removebg-previewcortado.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.leftSection}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p>Insituto Diomicio Freitas</p>
        </div>

        <div className={styles.rightSection}>
          {/*<button className={styles.actionBtn}>Login</button>
          <button className={styles.actionBtn}>Login</button>*/}
          <Link to="/login" className={styles.actionBtn}>
            Login
          </Link>

          <Link to="/contatos" className={styles.actionBtn}>
            Contato
          </Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/#topo">Início</Link>
          </li>
          <li>
            <Link to="/historia">História</Link>
          </li>
          <li>
            <Link to="/eventos-oficinas">Eventos e Oficinas</Link>
          </li>
          <li>
            <Link to="/como-se-voluntariar">Como se Voluntariar</Link>
          </li>
          <li>
            <Link to="/parceiros">Parceiros</Link>
          </li>
          <li>
            <Link to="/contatos">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
