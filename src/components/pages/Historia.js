import React from "react";
import styles from "../Section.module.css";
import stylesHistoria from "./Historia.module.css";
import historia from "../../assets/images/imgHistoria.jpeg";

const Historia = () => {
  return (
    <section className={styles.section} id="historia">
      <div className={stylesHistoria.historiaContainer}>
        <h1>História</h1>
        <img src={historia} alt="história" />
        <p>
          O Instituto de Educação Especial Diomicio Freitas, uma instituição
          filantrópica sem fins lucrativos, foi fundada no ano de 1985 com o
          objetivo de atender jovens com deficiência intelectual. A instituição
          é vinculada à Associação Pestalozzi e mantida por uma diretoria e por
          voluntários da comunidade.
        </p>
        <p>
          O Instituto procura preparar, qualificar e encaminhar jovens com
          deficiência intelectual para o mercado de trabalho, oportunizando a
          inclusão social e o exercício da cidadania. A instituição se
          consolidou como referência na qualificação de jovens e adultos para o
          mercado de trabalho.
        </p>
        <p>
          Ao longo de mais 30 anos de atividades, o Instituto Diomício Freitas
          tem realizado um grande trabalho junto à comunidade, dando importância
          e relevância na educação especial.
        </p>
        <p>
          O trabalho realizado ao longo desse tempo visa a inclusão do aluno no
          mercado de trabalho. O aluno é estimulado e orientado ao mercado de
          trabalho, através das oficinas oferecidas pela instituição.
        </p>
        <p>
          O Instituto busca a valorização e respeito às diferenças, atendendo às
          necessidades e desenvolvendo o potencial desses alunos, como forma de
          garantir seu direito à educação, fundado no princípio da diversidade.
        </p>
      </div>
    </section>
  );
};

export default Historia;
