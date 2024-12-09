import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ usernameOrEmail: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.usernameOrEmail || !loginData.password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    // Simula um login bem-sucedido
    onLogin();
    alert("Login realizado com sucesso!");
  };

  return (
    <div className="login-page">
      <header>
        <h1>Clockwork</h1>
      </header>
      <main>
        <section className="login-section">
          <h2>Bem-vindo de volta!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="usernameOrEmail"
              placeholder="Usuário ou E-mail"
              value={loginData.usernameOrEmail}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={loginData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-login">
              Entrar
            </button>
          </form>
          <div className="social-login">
            <p>Ou entre com:</p>
            <button className="btn-social google">Google</button>
            <button className="btn-social facebook">Facebook</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
