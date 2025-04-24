import React from "react";
import styles from "../Section.module.css";
import stylesContatos from "./Contatos.module.css";
import { FaWhatsapp } from "react-icons/fa";

const Contatos = () => {
  return (
    <section className={styles.section} id="contato">

      <div className={stylesContatos.infoContato}>
      <h2>Contato</h2>
        <h3>Informações do Instituto</h3>
        <p>
          <strong>Telefone:</strong> (48) 3433-8235
        </p>
        <p>
          <strong>Celular:</strong> (48) 99838-4125
        </p>
        <p>
          <strong>CNPJ:</strong> 75.567.081/0001-05
        </p>
        <p>
          <strong>E-mail:</strong> institutoeduc.especialdf@gmail.com
        </p>
        <p>
          <strong>Endereço:</strong> Rua Lúcia Milioli, 211 - Santa Bárbara
        </p>
        <p>
          <strong>CEP:</strong> 88802-020
        </p>
      </div>

      <form className={stylesContatos.form}>

        <h1>Para mais informações</h1>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="E-mail" required />
        <textarea placeholder="Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>


      <div className={stylesContatos.icons}>
        <a
          href="https://wa.me/5548998384125?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20instituto!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={stylesContatos.whatsapp} />
        </a>
      </div>
    </section>
  );
};

export default Contatos;
