import React from 'react';
import styles from '../Section.module.css';
import stylesParceiros from './Parceiros.module.css';

const Parceiros = () => {
  return (
    <section className={styles.section} id="parceiros">
      <h2>Nossos Parceiros</h2>
      <div className={stylesParceiros.parceirosContainer}>
        <a href="https://site-parceiro1.com" className={stylesParceiros.parceiro}>
          <div
            className={stylesParceiros.circle}
            style={{ backgroundColor: '#bbb' }}
          ></div>
          <span>Parceiro 1</span>
        </a>
        <a href="https://site-parceiro2.com" className={stylesParceiros.parceiro}>
          <div
            className={stylesParceiros.circle}
            style={{ backgroundColor: '#888' }}
          ></div>
          <span>Parceiro 2</span>
        </a>
      </div>
    </section>
  );
};

export default Parceiros;
