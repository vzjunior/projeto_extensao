import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./OficinaDetalhada.module.css";
import stylesSection from "./Section.module.css";
import { FaWhatsapp } from "react-icons/fa";

function OficinaDetalhada() {
  const { id } = useParams();
  const [oficina, setOficina] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/oficinas/${id}`)
      .then((res) => res.json())
      .then((data) => setOficina(data));
  }, [id]);

  if (!oficina) return <p>Carregando...</p>;

  return (
    <section className={stylesSection.section}>
      <h1>{oficina.titulo}</h1>
      {oficina.imagem_url && (
        <img
          src={`http://localhost:3001/img/${oficina.imagem_url}`}
          alt={oficina.titulo}
          className={styles.image}
        />
      )}
      <p>
        <strong>Descrição:</strong> {oficina.descricao}
      </p>
      <p>
        <strong>Data do Evento:</strong> {oficina.data_evento}
      </p>
      <p>
        <strong>Local:</strong> {oficina.local}
      </p>

      <a
        href="https://wa.me/554898384125?text=Ol%C3%A1%2C%20gostaria%20de%20participar%20da%20oficina%20"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.participarButton}
      >
        <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
        Participar
      </a>
    </section>
  );
}

export default OficinaDetalhada;
