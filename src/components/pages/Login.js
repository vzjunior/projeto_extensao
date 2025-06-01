import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import api from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email: usuario,
        senha,
        nome,
      });

      setMensagem("✅ Login realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Erro: " + error.response.data.message);
      } else {
        alert("Erro ao conectar com o servidor");
      }
      console.error(error);
    }
  };

  return (
    <div className={styles.backgroundCard}>
      <div className={styles.loginContainer} id="login">
        <div className={styles.infoLogin}>
          <h2>Bem-vindo!</h2>
          <p>Entre com seu usuário, nome e senha para acessar sua conta.</p>
        </div>

        {/* Mensagem de sucesso */}
        {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

        <form className={styles.form} onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Usuário (email)"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
