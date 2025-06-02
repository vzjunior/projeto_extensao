import React, { useEffect, useState } from "react";
import styles from "../Section.module.css";
import stylesEventos from "./Eventos.module.css";
import { Link } from "react-router-dom";
import api from "../../api/axios";



const EventosOficinas = () => {
   const [eventos, setEventos] = useState([]);
   const [loadingEventos, setLoadingEventos] = useState(true);
   const [errorEventos, setErrorEventos] = useState(null);
   
   useEffect(() => {
     async function fetchEventos() {
       try {
         const response = await api.get("/oficinas");
         setEventos(response.data);
       } catch (err) {
         setErrorEventos("Erro ao carregar eventos.");
       } finally {
         setLoadingEventos(false);
       }
     }
     fetchEventos();
   }, []);
  return (
    
      <section className={styles.section} id="eventos-oficinas">
  <h1>Eventos e Oficinas</h1>

{loadingEventos && <p>Carregando eventos...</p>}
{errorEventos && <p>{errorEventos}</p>}
{!loadingEventos && !errorEventos && eventos.length === 0 && <p>Nenhum evento encontrado.</p>}



  <div className={stylesEventos.eventoContainer}>
    <p>Participe das nossas iniciativas e faça a diferença!</p>

    <div className={stylesEventos.eventoContainer}>
      {eventos.map((evento) => (
        <div key={evento.id} className={stylesEventos.eventoBox}>
          {evento.imagem_url && (
            <img
              src={`http://localhost:3001/img/${evento.imagem_url}`}
              alt={evento.titulo}
              className={stylesEventos.eventImage}
            />
          )}
          <span className={stylesEventos.category}>EVENTO</span>
          <h4>{evento.titulo}</h4>
          <p>
            {evento.descricao.length > 100
              ? evento.descricao.slice(0, 100) + "..."
              : evento.descricao}
          </p>
          <Link
            to={`/oficinas/${evento.id}`}
            className={stylesEventos.saibaMaisButton}
          >
            saiba mais
          </Link>
          <span className={stylesEventos.date}>
            {new Date(evento.data_evento).toLocaleDateString()}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

  
  );
};

export default EventosOficinas;
