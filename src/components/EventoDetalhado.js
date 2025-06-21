import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./EventoDetalhado.module.css";
import stylesSection from  "./Section.module.css";

function EventoDetalhado() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/eventos/${id}`)
      .then((res) => res.json())
      .then((data) => setEvento(data));
  }, [id]);

  if (!evento) return <p>Carregando...</p>;

  return (
    <section className={stylesSection.section}>
      <h1>{evento.titulo}</h1>
      {evento.imagem_url && (
        <img
          src={`http://localhost:3001/img/${evento.imagem_url}`}
          alt={evento.titulo}
          className={styles.image}
        />
      )}
      <p>
        <strong>Descrição:</strong> {evento.descricao}
      </p>
      <p>
  <strong>Data do Evento:</strong>{" "}
  {new Date(evento.data_evento).toLocaleDateString("pt-BR")}
</p>
      <p>
        <strong>Local:</strong> {evento.local}
      </p>
    </section>
  );
}

export default EventoDetalhado;
