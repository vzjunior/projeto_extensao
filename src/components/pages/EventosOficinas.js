import React, { useEffect, useState } from "react";
import styles from "../Section.module.css";
import stylesEventos from "./Eventos.module.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import stylesHome from "./Home.module.css";

const EventosOficinas = () => {
  const [eventosFuturos, setEventosFuturos] = useState([]);
  const [eventosRealizados, setEventosRealizados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventos, setEventos] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEventos() {
      try {
        const response = await api.get("/eventos"); // endpoint que retorna todos eventos
        const eventos = response.data;

        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);

        const futuros = eventos.filter(
          (e) => new Date(e.data_evento) >= hoje
        );
        const realizados = eventos.filter(
          (e) => new Date(e.data_evento) < hoje
        );

        // Opcional: ordenar para melhor visualização
        futuros.sort(
          (a, b) => new Date(a.data_evento) - new Date(b.data_evento)
        );
        realizados.sort(
          (a, b) => new Date(b.data_evento) - new Date(a.data_evento)
        );

        setEventosFuturos(futuros);
        setEventosRealizados(realizados);
      } catch (err) {
        setError("Erro ao carregar eventos.");
      } finally {
        setLoading(false);
      }
    }

    fetchEventos();
  }, []);

  return (
    <section className={styles.section} id="eventos-oficinas">
      <h1>Eventos e Oficinas</h1>

      {loading && <p>Carregando eventos...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <h2 className={stylesEventos.subtitulo}>Próximos Eventos</h2>
          {eventosFuturos.length === 0 ? (
            <p>Não há eventos futuros.</p>
          ) : (
            <div className={stylesEventos.eventoContainer}>
              {eventosFuturos.map((evento) => (
                <div key={evento.id} className={stylesEventos.eventoBox}>
                  {evento.imagem_url && (
                    <img
                      src={`http://localhost:3001/img/${evento.imagem_url}`}
                      alt={evento.titulo}
                      className={stylesEventos.eventImage}
                    />
                  )}
                  <span className={stylesEventos.category}></span>
                  <h4>{evento.titulo}</h4>
                  <p>
                    {evento.descricao.length > 100
                      ? evento.descricao.slice(0, 100) + "..."
                      : evento.descricao}
                  </p>
                  <Link
                    to={`/eventos/${evento.id}`}
                    className={stylesEventos.saibaMaisButton}
                  >
                    saiba mais
                  </Link>
                  <span className={stylesEventos.date}>
                    {new Date(evento.data_evento).toLocaleDateString()}
                  </span>

                   {user && user.role === "admin" && (
                                  <div className={stylesHome.botoesContainer}>
                                    <button
                                      className={stylesHome.buttonEditar}
                                      onClick={() => navigate(`/eventos/editar/${evento.id}`)}  // <-- Navega para edição
                                    >
                                      Editar 
                                    </button>
                  
                                    <button
                                      className={stylesHome.buttonExcluir}
                                      onClick={async () => {
                                        const confirm = window.confirm("Deseja realmente excluir esta evento?");
                                        if (confirm) {
                                          try {
                                            await api.delete(`/eventos/${evento.id}`);
                                            setEventos(eventos.filter(n => n.id !== evento.id));
                                            alert("Evento excluído com sucesso!");
                                          } catch (err) {
                                            alert("Erro ao excluir evento.");
                                          }
                                        }
                                      }}
                                    >
                                      Excluir 
                                    </button>
                                  </div>
                                )}
                </div>
              ))}
            </div>
          )}

        <h2 className={stylesEventos.subtitulo}>Eventos Realizados</h2>
          {eventosRealizados.length === 0 ? (
            <p>Não há eventos realizados.</p>
          ) : (
            <div className={stylesEventos.eventoContainer}>
              {eventosRealizados.map((evento) => (
                <div key={evento.id} className={stylesEventos.eventoBox}>
                  {evento.imagem_url && (
                    <img
                      src={`http://localhost:3001/img/${evento.imagem_url}`}
                      alt={evento.titulo}
                      className={stylesEventos.eventImage}
                    />
                  )}
                  <span className={stylesEventos.category}></span>
                  <h4>{evento.titulo}</h4>
                  <p>
                    {evento.descricao.length > 100
                      ? evento.descricao.slice(0, 100) + "..."
                      : evento.descricao}
                  </p>
                  <Link
                    to={`/eventos/${evento.id}`}
                    className={stylesEventos.saibaMaisButton}
                  >
                    saiba mais
                  </Link>
                  <span className={stylesEventos.date}>
                    {new Date(evento.data_evento).toLocaleDateString()}
                  </span>
                  {user && user.role === "admin" && (
                                  <div className={stylesHome.botoesContainer}>
                                    
                  
                                    <button
                                      className={stylesHome.buttonExcluir}
                                      onClick={async () => {
                                        const confirm = window.confirm("Deseja realmente excluir esta evento?");
                                        if (confirm) {
                                          try {
                                            await api.delete(`/eventos/${evento.id}`);
                                            setEventos(eventos.filter(n => n.id !== evento.id));
                                            alert("Evento excluído com sucesso!");
                                          } catch (err) {
                                            alert("Erro ao excluir evento.");
                                          }
                                        }
                                      }}
                                    >
                                      Excluir 
                                    </button>
                                  </div>
                                )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default EventosOficinas;
