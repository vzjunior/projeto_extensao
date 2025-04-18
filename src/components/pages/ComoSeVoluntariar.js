import React from 'react';
import styles from '../Section.module.css';
import stylesComoSeVoluntariar from './ComoSeVoluntariar.module.css';

const ComoSeVoluntariar = () => {
  return (
    <section className = {styles.section} id="como-se-voluntariar">
      <h2>Como se Voluntariar</h2>
      <p>Informações sobre como se voluntariar...</p>
     
      <div className={stylesComoSeVoluntariar.passosContainer}>
      <ol className={stylesComoSeVoluntariar.listaPassos}>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</li>
        <li>Lorem ipsum dolor sit amet, enim ad minim veniam...</li>
        <li>Lorem ipsum dolor sit amet, eiusmod tempor incididunt...</li>
      </ol>
      <button className={stylesComoSeVoluntariar.botao}>Quero me voluntariar</button>
      </div>
    </section>
  );
};

export default ComoSeVoluntariar;
