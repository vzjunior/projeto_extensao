import React from 'react';
import styles from '../Section.module.css'
const Contatos = () => {
  return (
    <section className={styles.section} id="contato">
      <h2>Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contatos;
