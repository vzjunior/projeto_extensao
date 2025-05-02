import React from "react";
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate
import styles from "../Section.module.css";
import stylesComoSeVoluntariar from "./ComoSeVoluntariar.module.css";

const ComoSeVoluntariar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contatos");
  };

  return (
    <section className={styles.section} id="como-se-voluntariar">
      <h2>Como se Voluntariar</h2>
      <p>Informações sobre como se voluntariar...</p>

      <div className={stylesComoSeVoluntariar.passosContainer}>
        <ol className={stylesComoSeVoluntariar.listaPassos}>
          <li>
            <strong>Acesse o formulário de contato</strong> clicando no botão
            abaixo.
          </li>
          <li>
            <strong>Preencha seus dados pessoais:</strong> forneça seu nome
            completo, e-mail válido e o assunto de sua mensagem.
          </li>
          <li>
            <strong>Escreva sua mensagem</strong>, caso queira adicionar mais
            detalhes no campo de assunto.
          </li>
          <li>
            <strong>Envie o formulário</strong> clicando no botão "Enviar".
          </li>
          <li>
            <strong>Aguarde nossa resposta</strong>: nossa equipe irá revisar e
            entrar em contato por e-mail.
          </li>
        </ol>
        <button className={stylesComoSeVoluntariar.botao} onClick={handleClick}>
          Quero me voluntariar
        </button>
      </div>
    </section>
  );
};

export default ComoSeVoluntariar;
