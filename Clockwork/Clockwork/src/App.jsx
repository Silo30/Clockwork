import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controla se o usuário está logado
  const [isLoginPage, setIsLoginPage] = useState(false); // Controla se está na página de login ou cadastro
  const [userRegistered, setUserRegistered] = useState(false); // Controla se o usuário foi registrado

  // Lida com as mudanças no formulário de cadastro
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Lida com as mudanças no formulário de login
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Submissão do formulário de cadastro
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    alert(`Bem-vindo, ${formData.fullName}! Cadastro realizado com sucesso.`);
    setUserRegistered(true); // Marca que o usuário foi registrado
    setIsLoginPage(true); // Redireciona para a tela de login após cadastro
  };

  // Submissão do formulário de login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.usernameOrEmail || !loginData.password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    setIsLoggedIn(true); // Simula o login
    alert(`Bem-vindo de volta, ${loginData.usernameOrEmail}!`);
  };

  // Tela de Tarefas
  const renderTasks = () => {
    return (
      <div className="dashboard">
        <aside className="sidebar">
          <div className="user-info">
            <p>Usuário</p>
            <p>email.teste@gmail.com</p>
          </div>
          <nav>
            <ul>
              <li><button>Visualizar Kanban</button></li>
              <li><button>Adicionar Tarefa</button></li>
              <li><button>Visualizar Tarefas</button></li>
              <li><button>Atribuições de Tarefas</button></li>
              <li><button>Notas de Tarefas</button></li>
            </ul>
          </nav>
          <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
            Sair
          </button>
        </aside>
        <main className="task-content">
          <header>
            <h1>Tarefas Atuais</h1>
            <input type="text" placeholder="Procurar Tarefas" />
          </header>
          <section className="tasks-overview">
            <div className="task">
              <p>Tarefa 8 de 12</p>
              <progress value="67" max="100"></progress>
            </div>
          </section>
        </main>
      </div>
    );
  };

  // Tela de Login
  const renderLogin = () => {
    return (
      <div className="login-page">
        <header>
          <h1>Clockwork</h1>
          <button className="register-link" onClick={() => setIsLoginPage(false)}>
            Não tem uma conta? Cadastre-se
          </button>
        </header>
        <main className="login-main">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2>Faça Login</h2>
            <input
              type="text"
              name="usernameOrEmail"
              placeholder="Usuário ou Email"
              value={loginData.usernameOrEmail}
              onChange={handleLoginChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={loginData.password}
              onChange={handleLoginChange}
              required
            />
            <button type="submit" className="btn-submit">Entrar</button>
            <p>ou entre com</p>
            <div className="social-login">
              <button className="btn-social google">Google</button>
              <button className="btn-social facebook">Facebook</button>
            </div>
          </form>
        </main>
      </div>
    );
  };

  // Tela de Cadastro
  const renderRegister = () => {
    return (
      <div className="app">
        <header>
          <h1>Clockwork</h1>
          <button className="login-link" onClick={() => setIsLoginPage(true)}>
            Já é um usuário? Faça login
          </button>
        </header>
        <main>
          <section className="info-section">
            <h2>Organizado? Sobrecarregado?</h2>
            <p>Ou precisa guardar e ver suas tarefas com facilidade?!</p>
            <div className="icon-container">
              <img
                className="img"
                src="/img/img_icon.jpeg"
                alt="Ícone de caderno e lápis"
              />
            </div>
            <p className="praf">
              Gerencie suas tarefas sem esforço em qualquer lugar!
            </p>
          </section>
          <section className="form-section">
            <h2>Faça seu cadastro aqui!</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Nome Completo"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Nome de Usuário"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Senha"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn-submit">Cadastrar</button>
            </form>
            <p>ou cadastre-se com</p>
            <div className="social-login">
              <button className="btn-social google">Google</button>
              <button className="btn-social facebook">Facebook</button>
            </div>
          </section>
        </main>
      </div>
    );
  };

  return isLoggedIn ? renderTasks() : isLoginPage ? renderLogin() : renderRegister();
};

export default App;
