import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
    
  const handleLogin = (e) => {
    e.preventDefault();

    if (usuario === "admin" && senha === "1234") {
      navigate("/");
    } else {
      alert("Usuário ou senha incorretos");
    }
  };

  return (
    <div className={styles.backgroundCard}>
      <div className={styles.loginContainer} id="login">
        <div className={styles.infoLogin}>
          <h2>Bem-vindo!</h2>
          <p>
            Entre com seu usuário e senha para acessar o painel administrativo.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Usuário"
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
