import React from "react";
import styles from "../Section.module.css";
import stylesHome from "./Home.module.css";
import imgNews1 from "../../assets/images/fotoTesteHome.jpeg";
import imgNews2 from "../../assets/images/fotoTesteHome.jpeg";
import imgEvent1 from "../../assets/images/fotoTesteHome.jpeg";
import imgEvent2 from "../../assets/images/fotoTesteHome.jpeg";
import imgEvent3 from "../../assets/images/fotoTesteHome.jpeg";
import imgEvent4 from "../../assets/images/fotoTesteHome.jpeg";
import fundoHome from "../../assets/images/fundoHome.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.section} id="home">
      <h1>Instituto Diomício Freitas</h1>
      <p>Transformando vidas através da inclusão e da educação especial.</p>
      <img
        className={stylesHome.fundoHome}
        src={fundoHome}
        alt="Imagem de fundo"
      />

      <div className={stylesHome.acoesSection}>
        <h2>Ações Realizadas</h2>
        <ul className={stylesHome.acoesList}>
          <li>
            <strong>Projeto “Recicle Correto” – Reciclagem de Blisters:</strong>{" "}
            Iniciativa inédita com farmácias locais, utilizando bombonas de 300L
            para coleta de cartelas de comprimidos. Os materiais são enviados
            para uma empresa especializada e convertidos em portas, gerando
            renda para o Instituto.
          </li>
          <li>
            <strong>Reciclagem de Tampinhas, Lacres e Latinhas:</strong> Projeto
            complementar que amplia os esforços de sustentabilidade do
            Instituto.
          </li>
          <li>
            <strong>Locomoção Independente:</strong> Desenvolve habilidades para
            deslocamento seguro dos aprendizes na comunidade, promovendo
            autonomia.
          </li>
          <li>
            <strong>Grupo de Iniciação:</strong> Atividades básicas e
            observações práticas para desenvolver competências sociais e
            profissionais.
          </li>
          <li>
            <strong>Grupo de Pré-Qualificação:</strong> Formação profissional
            com foco em habilidades básicas, de gestão e específicas para
            atuação no mercado.
          </li>
          <li>
            <strong>SEVIL (Serviço de Vivências Laborais):</strong> Oportunidade
            de atividade laboral não remunerada para promover independência e
            inclusão social.
          </li>
          <li>
            <strong>Educação Física:</strong> Aulas com foco em saúde, lógica e
            qualidade de vida, utilizando equipamentos e atividades físicas
            orientadas.
          </li>
        </ul>
      </div>

      <div className={stylesHome.newsSection}>
        <h2>Notícias</h2>

        <div className={stylesHome.newsCard}>
          <img src={imgNews2} alt="Notícia 1" />
          <span className={stylesHome.category}>NEWS</span>
          <h3>
            Pedágio solidário do Instituto Diomício Freitas acontece neste
            sábado
          </h3>
          <p>
            A ação beneficente tem como objetivo arrecadar fundos para manter os
            atendimentos oferecidos pelo Instituto às pessoas com deficiência.
          </p>
          <Link to="/noticias/1" className={stylesHome.saibaMais}>
            Saiba mais
          </Link>
         
          <span className={stylesHome.date}>23 agosto 2023</span>
        </div>

        <div className={stylesHome.newsCard}>
          <img src={imgNews2} alt="Notícia 2" />
          <span className={stylesHome.category}>NEWS</span>
          <h3>Instituto comemora 38 anos com almoço beneficente</h3>
          <p>
            Evento realizado em Criciúma celebrou mais de três décadas de
            história e arrecadou recursos para a manutenção das atividades da
            entidade.
          </p>
          <Link to="/noticias/2" className={stylesHome.saibaMais}>
            Saiba mais
          </Link>
          <span className={stylesHome.date}>23 abril 2023</span>
        </div>

        <div className={stylesHome.newsCard}>
          <img src={imgNews1} alt="Notícia 3" />
          <span className={stylesHome.category}>NEWS</span>
          <h3>
            Instituto Diomício Freitas: 35 anos de inclusão e transformação
          </h3>
          <p>
            Desde 1985, o Instituto atua na garantia dos direitos das pessoas
            com deficiência, promovendo inclusão social e desenvolvimento
            pessoal.
          </p>
         <Link to="/noticias/3" className={stylesHome.saibaMais}>
            Saiba mais
          </Link>
          <span className={stylesHome.date}>18 dezembro 2020</span>
        </div>

        
        
        
      </div>

      <div className={stylesHome.eventsHeader}>
        <h2>Eventos</h2>
      </div>

      <div className={stylesHome.eventsGrid}>
        <div className={stylesHome.eventCard}>
          <img src={imgEvent1} alt="Evento 1" />
          <span className={stylesHome.category}>EVENTO</span>
          <h4>Reciclagem de Blisters</h4>
          <p>Projeto "Recicle Correto".</p>
          <Link to="/eventos/1" className={stylesHome.saibaMais}>
            Saiba mais
          </Link>
          <span className={stylesHome.date}>13 June 2023</span>
        </div>

        <div className={stylesHome.eventCard}>
          <img src={imgEvent2} alt="Evento 2" />
          <span className={stylesHome.category}>EVENTO</span>
          <h4>Locomoção Independente</h4>
          <p>Locomoção autonoma.</p>
          <Link to="/eventos/2" className={stylesHome.saibaMais}>
            Saiba mais
          </Link>
          <span className={stylesHome.date}>13 June 2023</span>
        </div>

        <div className={stylesHome.eventCard}>
          <img src={imgEvent3} alt="Evento 3" />
          <span className={stylesHome.category}>EVENTO</span>
          <h4>Grupo de Iniciação</h4>
          <p>Atividades práticas.</p>
          <Link to="/eventos/3" className={stylesHome.saibaMais}>
            Saiba mais
          </Link>
          <span className={stylesHome.date}>13 June 2023</span>
        </div>

        <div className={stylesHome.eventCard}>
          <img src={imgEvent4} alt="Evento 4" />
          <span className={stylesHome.category}>EVENTO</span>
          <h4>Grupo de Pré-Qualificação</h4>
          <p>Formação
          profissional e competências de auto-gerenciamento.</p>
          <Link to="/eventos/4" className={stylesHome.saibaMais}>
            Saiba mais
          </Link>
          <span className={stylesHome.date}>13 June 2023</span>
        </div>
      </div>
    </section>


  );
};

export default Home;
