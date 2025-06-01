import React, { useState } from "react";
import styles from "../Section.module.css";
import stylesContatos from "./Contatos.module.css";
import { FaWhatsapp } from "react-icons/fa";
import api from "../../api/axios";
const Contatos = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      to: email,
      subject: `Mensagem de ${nome}`,
      text: mensagem,
    };

    try {
      const response = await api.post("/email", data);

      if (response.status === 201 || response.status === 200) {
        setStatus("Email enviado com sucesso!");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        setStatus("Erro ao enviar o email.");
      }
    } catch (error) {
      setStatus("Erro ao enviar o email. Tente novamente mais tarde.");
      console.error(error);
    }
  };

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

      <form className={stylesContatos.form} onSubmit={handleSubmit}>
        <h1>Para mais informações</h1>
        <input
          type="text"
          placeholder="Nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Mensagem"
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>

      {status && <p>{status}</p>}

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
