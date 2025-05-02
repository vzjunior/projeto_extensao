import React from "react";
import styles from "../Section.module.css";
import stylesEventos from "./Eventos.module.css";
import imgEvent3 from "../../assets/images/fotoTesteHome.jpeg";

const EventosOficinas = () => {
  return (
    <section className={styles.section} id="eventos-oficinas">
      <h1>Eventos e Oficinas</h1>
      <div className={stylesEventos.eventoContainer}>
        <h2>Participe das nossas iniciativas e faça a diferença!</h2>
        <p>
          Na nossa organização, acreditamos que a participação ativa em eventos
          e oficinas é uma maneira poderosa de aprender, se conectar com a
          comunidade e contribuir para um futuro melhor. Nossos eventos e
          oficinas são projetados para oferecer experiências enriquecedoras, com
          foco em aprendizado, troca de conhecimentos e, acima de tudo, em
          transformação social.
        </p>
        <div className={stylesEventos.eventoBox}>
          <img src={imgEvent3} alt="Reciclagem Blisters" />
          <h2>Reciclagem de Blisters</h2>
          <p>
            Projeto "Recicle Correto" busca garantir o descarte adequado de
            blisters, transformando-os em material reciclado para a fabricação
            de portas, enquanto arrecada fundos para o Instituto.
          </p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <img src={imgEvent3} alt="Locomoção Independente" />
          <h2>Locomoção Independente</h2>
          <p>
            Oferece condições para que os aprendizes se locomovam com autonomia
            para residência, trabalho e comunidade, utilizando transporte ou
            outros recursos de forma independente e segura.
          </p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <img src={imgEvent3} alt="Grupo de Iniciação" />
          <h2>Grupo de Iniciação</h2>
          <p>
            Atividades práticas e teóricas para o desenvolvimento de habilidades
            profissionais e sociais essenciais, como identidade pessoal e
            higiene, preparando os jovens para o mercado de trabalho.
          </p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <img src={imgEvent3} alt="Grupo de Pré-Qualificação" />
          <h2>Grupo de Pré-Qualificação</h2>
          <p>
            Desenvolve habilidades específicas de trabalho, gestão e as
            necessárias para o mercado de trabalho, com foco em formação
            profissional e competências de auto-gerenciamento.
          </p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <img src={imgEvent3} alt="SEVIL" />
          <h2>SEVIL - Vivências Laborais</h2>
          <p>
            Oferece a oportunidade de realizar atividades laborais não
            remuneradas, desenvolvendo independência pessoal e contribuindo para
            a inclusão social.
          </p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <img src={imgEvent3} alt="Educação Física" />
          <h2>Educação Física</h2>
          <p>
            Atividades para promover a saúde, resistência e flexibilidade,
            melhorando a qualidade de vida e a concentração dos aprendizes por
            meio de exercícios físicos.
          </p>
        </div>

        <div className={stylesEventos.eventoBox}>
          <img src={imgEvent3} alt="Clube de Mães" />
          <h2>Clube de Mães</h2>
          <p>
            Grupo que estreita os vínculos familiares e trabalha pela autonomia
            e inclusão social dos filhos, promovendo o desenvolvimento pessoal e
            profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventosOficinas;
