import React, { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Cadastro.module.css";

const CadastroNoticia = () => {
  const { id } = useParams(); // pega o id da notícia (se existir)
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [imagem, setImagem] = useState(null);
  const [imagemAtual, setImagemAtual] = useState(null);

  // Se estiver editando (id presente), carregar dados da notícia
  useEffect(() => {
    if (id) {
      api.get(`/noticias/${id}`)
        .then(response => {
          setTitulo(response.data.titulo);
          setConteudo(response.data.conteudo);
          setImagemAtual(response.data.imagem_url);
        })
        .catch(() => {
          alert("Erro ao carregar notícia para edição.");
          navigate("/");
        });
    }
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("conteudo", conteudo);
    if (imagem) {
      formData.append("file", imagem); // 'file' é o nome esperado pelo backend
    }

    try {
      if (id) {
        // Atualizar notícia
        await api.put(`/noticias/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Notícia atualizada com sucesso!");
      } else {
        // Criar nova notícia
        await api.post("/noticias", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Notícia cadastrada com sucesso!");
      }
      navigate("/");
    } catch (error) {
      alert("Erro ao salvar notícia.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>{id ? "Editar Notícia" : "Cadastrar Nova Notícia"}</h2>
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

        {imagemAtual && !imagem && (
          <div>
            <p>Imagem atual:</p>
            <img
              src={`http://localhost:3001/img/${imagemAtual}`}
              alt="Imagem atual"
              width={200}
              style={{ marginTop: "8px", borderRadius: "8px" }}
            />
          </div>
        )}

        <button type="submit">{id ? "Atualizar" : "Cadastrar"}</button>
      </form>
    </div>
  );
};

export default CadastroNoticia;
