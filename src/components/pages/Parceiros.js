import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import styles from "../Section.module.css";
import stylesParceiros from "./Parceiros.module.css";
import { useAuth } from "../../context/AuthContext";
import stylesHome from "./Home.module.css";

const Parceiros = () => {
  const [parceiros, setParceiros] = useState([]);
  const [loadingParceiros, setLoadingParceiros] = useState(true);
  const [errorParceiros, setErrorParceiros] = useState(null);

  const { user } = useAuth();
  const navigate = useNavigate();

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
        e garantir os direitos das pessoas com deficiência.
      </p>

      {user?.role === "admin" && (
        <div style={{ marginBottom: "20px" }}>
          <Link
            to="/parceiros/cadastrar"
            className={stylesParceiros.botaoSejaParceiro}
          >
            Adicionar Parceiro
          </Link>
        </div>
      )}

      {loadingParceiros && <p>Carregando parceiros...</p>}
      {errorParceiros && <p>{errorParceiros}</p>}
      {!loadingParceiros && !errorParceiros && parceiros.length === 0 && (
        <p>Nenhum parceiro encontrado.</p>
      )}

      <div className={stylesParceiros.parceirosContainer}>
        {parceiros.map((parceiro) => (
          <div key={parceiro.id} className={stylesParceiros.parceiroWrapper}>
            <a
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

            {user?.role === "admin" && (
             <div className={stylesHome.botoesContainer}>
                  <button
                    className={stylesHome.buttonEditar}
                    onClick={() => navigate(`/parceiros/editar/${parceiro.id}`)}  // <-- Navega para edição
                  >
                    Editar 
                  </button>

                  <button
                    className={stylesHome.buttonExcluir}
                    onClick={async () => {
                      const confirm = window.confirm("Deseja realmente excluir este parceiro?");
                      if (confirm) {
                        try {
                          await api.delete(`/parceiros/${parceiro.id}`);
                          setParceiros(parceiros.filter(n => n.id !== parceiro.id));
                          alert("Parceiro excluído com sucesso!");
                        } catch (err) {
                          alert("Erro ao excluir parceiro.");
                        }
                      }
                    }}
                  >
                    Excluir
                  </button>
                </div>
            )}
          </div>
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
