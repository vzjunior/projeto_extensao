import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import api from "../../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");  // email
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email: usuario,
        password: senha,
      });

      const token = response.data.access_token;

      // Salvar token para usar depois nas chamadas protegidas
      localStorage.setItem("token", token);

      setMensagem("✅ Login realizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Erro: " + (error.response.data.message || "Usuário ou senha inválidos"));
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
          <p>Entre com seu usuário (email) e senha para acessar sua conta.</p>
        </div>

        {mensagem && <p className={styles.sucesso}>{mensagem}</p>}

        <form className={styles.form} onSubmit={handleLogin}>
          <h1>Login</h1>

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
