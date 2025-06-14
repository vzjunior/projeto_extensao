import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import styles from "./CadastroNoticia.module.css";

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("conteudo", conteudo);
    if (imagem) {
      formData.append("imagem", imagem);
    }

    try {
      await api.post("/noticias", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Notícia cadastrada com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Erro ao cadastrar notícia.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Cadastrar Nova Notícia</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Conteúdo:</label>
          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Imagem (opcional):</label>
          <input
            type="file"
            onChange={(e) => setImagem(e.target.files[0])}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroNoticia;
