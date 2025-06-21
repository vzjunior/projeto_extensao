import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import styles from "./Cadastro.module.css"; 

const CadastroEvento = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [local, setLocal] = useState("");
  const [imagem, setImagem] = useState(null);
  const [imagemAtual, setImagemAtual] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams(); // Se existe id => modo edição

  // Carrega evento se for edição
  useEffect(() => {
    if (id) {
      async function fetchEvento() {
        try {
          const response = await api.get(`/eventos/${id}`);
          const evento = response.data;
          setTitulo(evento.titulo);
          setDescricao(evento.descricao);
          setDataEvento(evento.data_evento?.split("T")[0]);
          setLocal(evento.local); 
          setImagemAtual(evento.imagem_url);
        } catch (err) {
          alert("Erro ao carregar evento.");
        }
      }

      fetchEvento();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descricao", descricao);
    formData.append("data_evento", dataEvento);
    formData.append("local", local);
    if (imagem) {
      formData.append("file", imagem); // precisa ser 'file' no backend
    }

    try {
      if (id) {
        // Modo edição
        await api.put(`/eventos/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Evento atualizado com sucesso!");
      } else {
        // Modo criação
        await api.post("/eventos", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Evento criado com sucesso!");
      }

      navigate("/");
    } catch (error) {
      alert("Erro ao salvar evento.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>{id ? "Editar Evento" : "Cadastrar Novo Evento"}</h2>
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
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Data do Evento:</label>
          <input
            type="date"
            value={dataEvento}
            onChange={(e) => setDataEvento(e.target.value)}
            required
          />
        </div>

         <div>
          <label>Local:</label>
          <input value={local} onChange={(e) => setLocal(e.target.value)} required />
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

export default CadastroEvento;
