import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import styles from "../Section.module.css";
import stylesParceiros from "./Parceiros.module.css";

const Parceiros = () => {
  const [parceiros, setParceiros] = useState([]);
  const [loadingParceiros, setLoadingParceiros] = useState(true);
  const [errorParceiros, setErrorParceiros] = useState(null);

  useEffect(() => {
    async function fetchParceiros() {
      try {
        const response = await api.get("/parceiros");
        setParceiros(response.data);
      } catch (err) {
        setErrorParceiros("Erro ao carregar Parceiros.");
      } finally {
        setLoadingParceiros(false);
      }
    }
    fetchParceiros();
  }, []);

  return (
    <section className={styles.section} id="parceiros">
      <h2>Nossos Parceiros</h2>

      <p>
        O Instituto Diomício Freitas é grato por contar com a colaboração de
        diversos parceiros que acreditam na nossa missão de promover a inclusão
        e garantir os direitos das pessoas com deficiência. Estes parceiros,
        tanto públicos quanto privados, nos apoiam de diversas formas, seja por
        meio de recursos financeiros, ações comunitárias ou programas de
        capacitação. Juntos, estamos criando um impacto positivo e
        transformador, sempre com o objetivo de melhorar a qualidade de vida e a
        integração social dos nossos beneficiários.
      </p>

      {loadingParceiros && <p>Carregando parceiros...</p>}
      {errorParceiros && <p>{errorParceiros}</p>}
      {!loadingParceiros && !errorParceiros && parceiros.length === 0 && (
        <p>Nenhum parceiro encontrado.</p>
      )}

      <div className={stylesParceiros.parceirosContainer}>
        {parceiros.map((parceiro) => (
          <a
            key={parceiro.id}
            href={parceiro.site_url}
            className={stylesParceiros.parceiro}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={stylesParceiros.circle}>
              {parceiro.imagem_url ? (
                <img
                  src={`http://localhost:3001/img/${parceiro.imagem_url}`}
                  alt={parceiro.nome}
                />
              ) : (
                <div style={{ fontSize: "12px", color: "#999" }}>
                  Sem imagem
                </div>
              )}
            </div>
            <span>{parceiro.nome}</span>
          </a>
        ))}
      </div>

      <div className={stylesParceiros.ctaParceiro}>
        <p>
          Você representa uma empresa ou instituição e gostaria de fazer parte
          desta missão?
        </p>
        <a href="/contatos" className={stylesParceiros.botaoSejaParceiro}>
          Seja um Parceiro
        </a>
      </div>
    </section>
  );
};

export default Parceiros;
