import React from 'react';
import styles from '../Section.module.css';

const Parceiros = () => {
  return (
    <section className={styles.section} id="parceiros">
      <h2>Nossos Parceiros</h2>
      <div className={styles.parceirosContainer}>
        <a href="https://site-parceiro1.com" className={styles.parceiro}>
          <div className={styles.circle}></div>
          <span>Parceiro 1</span>
        </a>
        <a href="https://site-parceiro2.com" className={styles.parceiro}>
          <div className={styles.circle}></div>
          <span>Parceiro 2</span>
        </a>
      </div>
    </section>
  );
};

export default Parceiros;
