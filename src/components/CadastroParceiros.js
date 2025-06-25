import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import styles from "./Cadastro.module.css";

const CadastroParceiro = () => {
  const [nome, setNome] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [imagem, setImagem] = useState(null);
  const [imagemAtual, setImagemAtual] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      async function fetchParceiro() {
        try {
          const response = await api.get(`/parceiros/${id}`);
          const parceiro = response.data;
          setNome(parceiro.nome);
          setSiteUrl(parceiro.site_url);
          setImagemAtual(parceiro.imagem_url);
        } catch (err) {
          alert("Erro ao carregar parceiro.");
        }
      }

      fetchParceiro();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("site_url", siteUrl);
    if (imagem) {
      formData.append("file", imagem);
    }

    try {
      if (id) {
        await api.put(`/parceiros/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Parceiro atualizado com sucesso!");
      } else {
        await api.post("/parceiros", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Parceiro cadastrado com sucesso!");
      }

      navigate("/parceiros");
    } catch (error) {
      alert("Erro ao salvar parceiro.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>{id ? "Editar Parceiro" : "Cadastrar Novo Parceiro"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Site do Parceiro:</label>
          <input
            type="url"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Imagem (opcional):</label>
          <input type="file" onChange={(e) => setImagem(e.target.files[0])} />
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

export default CadastroParceiro;
