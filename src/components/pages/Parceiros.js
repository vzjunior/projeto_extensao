import React from 'react';
import styles from '../Section.module.css';
const Parceiros = () => {
  return (
    <section className={styles.section} id="parceiros">
      <h2>Nossos Parceiros</h2>
      <div className="parceiro">Parceiro 1</div>
      <div className="parceiro">Parceiro 2</div>
    </section>
  );
};

export default Parceiros;
