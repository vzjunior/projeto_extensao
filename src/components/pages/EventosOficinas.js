import React from 'react';
import styles from '../Section.module.css';
import stylesEventos from './Eventos.module.css';


const EventosOficinas = () => {
  return (
    <section className={styles.section} id="eventos-oficinas">
      <h1>Eventos e Oficinas</h1>
      <div className={stylesEventos.eventoContainer}>
        <div className={stylesEventos.eventoBox}>
          <h2>Pedágio voluntário</h2>
          <p>Dia 15/04 acontecerá o pedágio voluntário em frente ao Shopping Della</p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <h2>Páscoa Instituto</h2>
          <p>Dia 18/04 acontecerá a Páscoa solidária no Instituto</p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <h2>Reciclagem Diomicio</h2>
          <p>Coleta de tampas e lacres em frente ao Instituto</p>
        </div>
      </div>
    </section>
  );
};

export default EventosOficinas;
