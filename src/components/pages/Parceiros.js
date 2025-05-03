import React from "react";
import styles from "../Section.module.css";
import stylesParceiros from "./Parceiros.module.css";
import parceiroGov from "../../assets/images/parceiroGov.png";
import parceiroPlasson from "../../assets/images/parceiroPlasson.png";
import parceiroUnesc from "../../assets/images/parceiroUnesc.png";

const Parceiros = () => {
  return (
    <section className={styles.section} id="parceiros">
      <h2>Nossos Parceiros</h2>
      <p className={stylesParceiros.parceiroTexto}>
        O Instituto Diomício Freitas é grato por contar com a colaboração de
        diversos parceiros que acreditam na nossa missão de promover a inclusão
        e garantir os direitos das pessoas com deficiência. Estes parceiros,
        tanto públicos quanto privados, nos apoiam de diversas formas, seja por
        meio de recursos financeiros, ações comunitárias ou programas de
        capacitação. Juntos, estamos criando um impacto positivo e
        transformador, sempre com o objetivo de melhorar a qualidade de vida e a
        integração social dos nossos beneficiários.
      </p>
      <div className={stylesParceiros.parceirosContainer}>
        <a
          href="https://www.criciuma.sc.gov.br/"
          className={stylesParceiros.parceiro}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={stylesParceiros.circle}>
            <img src={parceiroGov} alt="Prefeitura de Criciúma" />
          </div>
          <span>Prefeitura de Criciúma</span>
        </a>
        <a
          href="https://www.plasson.com.br/"
          className={stylesParceiros.parceiro}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={stylesParceiros.circle}>
            <img src={parceiroPlasson} alt="Plasson do Brasil" />
          </div>
          <span>Plasson do Brasil</span>
        </a>
        <a
          href="https://www.unesc.net/"
          className={stylesParceiros.parceiro}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={stylesParceiros.circle}>
            <img src={parceiroUnesc} alt="Unesc" />
          </div>
          <span>Unesc</span>
        </a>
      </div>
      <div className={stylesParceiros.ctaParceiro}>
  <p>Você representa uma empresa ou instituição e gostaria de fazer parte desta missão?</p>
  <a
    href="/contatos"
    className={stylesParceiros.botaoSejaParceiro}
  >
    Seja um Parceiro
  </a>
</div>

    </section>
  );
};

export default Parceiros;
