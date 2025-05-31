import React, { useEffect, useState } from "react";
import styles from "../Section.module.css";
import stylesHome from "./Home.module.css";
import fundoHome from "../../assets/images/fundoHome.jpeg";
import { Link } from "react-router-dom";
import api from "../../api/axios";


const Home = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [eventos, setEventos] = useState([]);
  const [loadingEventos, setLoadingEventos] = useState(true);
  const [errorEventos, setErrorEventos] = useState(null);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const response = await api.get("/noticias");
        setNoticias(response.data);
      } catch (err) {
        setError("Erro ao carregar notícias.");
      } finally {
        setLoading(false);
      }
    }

     async function fetchEventos() {
      try {
        const response = await api.get("/eventos");
        setEventos(response.data);
      } catch (err) {
        setErrorEventos("Erro ao carregar eventos.");
      } finally {
        setLoadingEventos(false);
      }
    }

    fetchNoticias();
    fetchEventos();
  }, []);

  return (
    <section className={styles.section} id="home">
      <h1>Instituto Diomício Freitas</h1>
      <p>Transformando vidas através da inclusão e da educação especial.</p>
      <img className={stylesHome.fundoHome} src={fundoHome} alt="Imagem de fundo" />

      <div className={stylesHome.acoesSection}>
        <h2>Ações Realizadas</h2>
        <ul className={stylesHome.acoesList}>
          <li>
            <strong>Projeto “Recicle Correto” – Reciclagem de Blisters:</strong>{" "}
            Iniciativa inédita com farmácias locais, utilizando bombonas de 300L para coleta de cartelas de comprimidos. Os materiais são enviados para uma empresa especializada e convertidos em portas, gerando renda para o Instituto.
          </li>
          <li>
            <strong>Reciclagem de Tampinhas, Lacres e Latinhas:</strong> Projeto complementar que amplia os esforços de sustentabilidade do Instituto.
          </li>
          <li>
            <strong>Locomoção Independente:</strong> Desenvolve habilidades para deslocamento seguro dos aprendizes na comunidade, promovendo autonomia.
          </li>
          <li>
            <strong>Grupo de Iniciação:</strong> Atividades básicas e observações práticas para desenvolver competências sociais e profissionais.
          </li>
          <li>
            <strong>Grupo de Pré-Qualificação:</strong> Formação profissional com foco em habilidades básicas, de gestão e específicas para atuação no mercado.
          </li>
          <li>
            <strong>SEVIL (Serviço de Vivências Laborais):</strong> Oportunidade de atividade laboral não remunerada para promover independência e inclusão social.
          </li>
          <li>
            <strong>Educação Física:</strong> Aulas com foco em saúde, lógica e qualidade de vida, utilizando equipamentos e atividades físicas orientadas.
          </li>
        </ul>
      </div>

      <div className={stylesHome.newsSection}>
        <h2>Notícias</h2>

        {loading && <p>Carregando notícias...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && noticias.length === 0 && <p>Nenhuma notícia encontrada.</p>}

        <div className={stylesHome.newsList}>
          {noticias.map((noticia) => (
            <div key={noticia.id} className={stylesHome.newsCard}>
              {noticia.imagem_url && (
                <img
                  src={`http://localhost:3001/img/${noticia.imagem_url}`}
                  alt={noticia.titulo}
                  className={stylesHome.newsImage}
                />
              )}
              <span className={stylesHome.category}>NEWS</span>
              <h3>{noticia.titulo}</h3>
              <p>
                {noticia.conteudo.length > 250
                  ? noticia.conteudo.slice(0, 250) + "..."
                  : noticia.conteudo}
              </p>
              <Link to={`/noticias/${noticia.id}`} className={stylesHome.saibaMais}>
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={stylesHome.eventsHeader}>
  <h2>Eventos</h2>


{loadingEventos && <p>Carregando eventos...</p>}
{errorEventos && <p>{errorEventos}</p>}
{!loadingEventos && !errorEventos && eventos.length === 0 && <p>Nenhum evento encontrado.</p>}


<div className={stylesHome.eventsGrid}>
  {eventos.map((evento) => (
    <div key={evento.id} className={stylesHome.eventCard}>
      {evento.imagem_url && (
        <img
          src={`http://localhost:3001/img/${evento.imagem_url}`}
          alt={evento.titulo}
          className={stylesHome.eventImage}
        />
      )}
      <span className={stylesHome.category}>EVENTO</span>
      <h4>{evento.titulo}</h4>
      <p>
        {evento.descricao.length > 100
          ? evento.descricao.slice(0, 100) + "..."
          : evento.descricao}
      </p>
      <Link to={`/eventos/${evento.id}`} className={stylesHome.saibaMais}>
        Saiba mais
      </Link>
      <span className={stylesHome.date}>
        {new Date(evento.data_evento).toLocaleDateString()}
      </span>
    </div>
  ))}
</div>
</div>


    </section>
  );
};

export default Home;
