import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./NoticiaDetalhada.module.css";

function NoticiaDetalhada() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/noticias/${id}`)
      .then((res) => res.json())
      .then((data) => setNoticia(data));
  }, [id]);

  if (!noticia) return <p>Carregando...</p>;

  return (
    <section className={styles.section}>
      <h1>{noticia.titulo}</h1>
      {noticia.imagem_url && (
        <img
          src={`http://localhost:3001/img/${noticia.imagem_url}`}
          alt={noticia.titulo}
          className={styles.image}
        />
      )}
      <p>{noticia.conteudo}</p>
    </section>
  );
}

export default NoticiaDetalhada;
