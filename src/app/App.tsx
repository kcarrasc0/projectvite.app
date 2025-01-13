import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="header">
        <span>{darkMode ? "Modo Claro" : "Modo Escuro"}</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleMode} />
          <span className="slider">{darkMode ? "" : ""}</span>
        </label>
      </header>

      <main className="login-container">
        <div className="login-box">
          <div>
            <img
              src={`./img/${darkMode ? "ICONLIGTH.png" : "ICONDARK.png"}`}
              alt="Ícone"
            />
            <br />
            <img
              src={`./img/${darkMode ? "LOGOLIGTH.png" : "LOGODARK.png"}`}
              alt="Logo"
            />
          </div>
          <h2>Acessar</h2>
          <p>Utilize o e-mail da sua conta cadastrada</p>
          <form>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="input-email"
              required
            />
            <div className="links">
              <a href="#">Esqueceu e-mail ou senha?</a>
            </div>
            <a href="#" className="btn-secondary">
              Criar conta
            <button type="submit" className="btn-primary">
              Avançar
            </button>
            </a>
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>
          Use energia é uma plataforma personalizada de gestão de energia,
          consulte os <a href="#">termos de uso</a>.
        </p>
        <a href="#">Preciso de ajuda</a>
        <p>© 2025 XPE Tecnologia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
