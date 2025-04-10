import React from 'react';
import styles from '../Section.module.css';

const EventosOficinas = () => {
  return (
    <section className={styles.section} id="eventos-oficinas">
      <h1>Eventos e Oficinas</h1>
      <div className={styles.eventoContainer}>
        <div className={styles.eventoBox}>
          <h2>Workshop de Programação</h2>
          <p>Aprenda lógica de programação com especialistas da área. Dia 15 de abril.</p>
        </div>

        <div className={styles.eventoBox}>
          <h2>Oficina de Robótica</h2>
          <p>Monte seu próprio robô com kits de Arduino. Dia 18 de abril.</p>
        </div>

        <div className={styles.eventoBox}>
          <h2>Palestra: Carreiras em TI</h2>
          <p>Profissionais do mercado compartilham suas experiências. Dia 20 de abril.</p>
        </div>
      </div>
    </section>
  );
};

export default EventosOficinas;
