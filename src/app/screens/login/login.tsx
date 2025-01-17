// import { useState } from 'react'
import "./login.css";
import usenergiawhite from "../../assets/usenergiawhite.svg";
import usenergiablack from "../../assets/usenergiablack.svg";
import Button from "../../components/Button/Button";
import {
  BLACK,
  DARK_GRAY,
  GRAY,
  WHITE,
  h1,
  h2,
  inputStyle,
  copyrightText,
  buttonStyle,
} from "../../styles/styles";
import { useEffect, useState } from "react";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

function Login() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [isUserValid, setIsUserValid] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");

    document.body.style.backgroundColor = darkMode ? BLACK : GRAY;

    if (root) {
      root.style.backgroundColor = darkMode ? BLACK : GRAY;
    }
  }, [darkMode]);

  const emailsLista = [
    "fulano@gmail.com",
    "ciclano@gmail.com",
    "beltrano@gmail.com",
  ];

  const handlerAuth = () => {
    const rightPass = "1234";
    if (inputPassword === rightPass) {
      console.log("Authenticated User!");
    } else {
      console.log("User Unauthorized");
    }
  };

  const handlerMode = (isChecked: boolean) => {
    console.log("mode before:", darkMode);
    isChecked ? setDarkMode(true) : setDarkMode(false);
    console.log(isChecked);
  };

  const handlerAvance = () => {
    if (emailsLista.includes(inputEmail)) {
      setIsUserValid(true);
      console.log("email existe");
    } else {
      setIsUserValid(false);
      console.log("email nao existe");
      // logica para avisar que o email eh invalido
    }
  };

  return (
    <>
      <div
        style={{
          width: 180,
          height: 60,
          display: "flex",
          justifyContent: "right",
          position: "relative",
          left: 500,
          bottom: 50
        }}
      >
        <text
          style={{
            color: darkMode ? WHITE : BLACK,
            fontFamily: "satoshi-bold",
            padding: 20,
          }}
        >
          {darkMode ? "Modo Escuro" : "Modo Claro"}
        </text>
        <ToggleSwitch
          onClickHandler={() => {
            setDarkMode(!darkMode);
          }}
        />
      </div>
      <div
        id="central-div"
        style={{ backgroundColor: darkMode ? DARK_GRAY : WHITE }}
      >
        {darkMode ? (
          <img src={usenergiawhite} width="400px" />
        ) : (
          <img src={usenergiablack} width="400px" />
        )}
        <div id="contents">
          <div id="central-elements">
            <h1 style={{ ...h1, color: darkMode ? WHITE : BLACK }}>Acessar</h1>
            <h2 style={{ ...h2, color: darkMode ? WHITE : BLACK }}>
              Utilize o e-mail da sua conta cadastrada
            </h2>
          </div>
          <div id="login-items">
            {isUserValid ? (
              <>
                <input
                  onChange={(e) => {
                    setInputPassword(e.target.value);
                  }}
                  placeholder="Digite sua senha"
                  style={{
                    ...inputStyle,
                    backgroundColor: darkMode ? DARK_GRAY : WHITE,
                    color: darkMode ? WHITE : BLACK,
                    borderColor: darkMode ? WHITE : BLACK,
                  }}
                  type={showPassword ? "text" : "password"}
                />
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setShowPassword(e.target.checked);
                  }}
                />
                <text style={{ ...h2, color: darkMode ? WHITE : BLACK }}>
                  Mostrar senha
                </text>
              </>
            ) : (
              <>
                <input
                  onChange={(e) => {
                    setInputEmail(e.target.value);
                  }}
                  placeholder="Digite seu e-mail"
                  style={{
                    ...inputStyle,
                    backgroundColor: darkMode ? DARK_GRAY : WHITE,
                    color: darkMode ? WHITE : BLACK,
                    borderColor: darkMode ? WHITE : BLACK,
                  }}
                />
                <a
                  href="google.com"
                  style={{ color: darkMode ? WHITE : BLACK }}
                >
                  Esqueceu e-mail ou senha?
                </a>
              </>
            )}
          </div>
        </div>
        <div id="buttons">
          <Button
            textContent={isUserValid ? "Esqueceu" : "Criar conta"}
            style={{
              ...buttonStyle,
              backgroundColor: darkMode ? DARK_GRAY : WHITE,
              color: darkMode ? WHITE : BLACK,
            }}
            onHover={{
              ...buttonStyle,
              backgroundColor: darkMode ? BLACK : GRAY,
              color: darkMode ? WHITE : BLACK,
            }}
          />
          <Button
            textContent="Avançar"
            style={{
              ...buttonStyle,
              backgroundColor: darkMode ? WHITE : BLACK,
              color: darkMode ? BLACK : WHITE,
              marginLeft: "20px",
            }}
            onClick={handlerAvance}
            onHover={{
              ...buttonStyle,
              backgroundColor: darkMode ? GRAY : DARK_GRAY,
              color: darkMode ? BLACK : WHITE,
              marginLeft: "20px",
            }}
          />
        </div>
      </div>
      <div id="description-text" style={{ position: "relative", top: "15px" }}>
        <text
          style={{
            color: darkMode ? WHITE : BLACK,
            fontFamily: "satoshi-light",
          }}
        >
          {" "}
          Use energia é uma plataforma de gestão de energia, consulte os{" "}
          <a
            style={{
              color: darkMode ? WHITE : BLACK,
              textDecoration: "underline",
            }}
            href="google.com"
          >
            termos de uso
          </a>
          .
        </text>
        {/* <Button textContent="Preciso de ajuda" style={{ fontFamily: "satoshi-light" }} /> */}
        <a
          href="google.com"
          style={{
            color: darkMode ? WHITE : BLACK,
            fontFamily: "satoshi-light",
            marginLeft: 200,
          }}
        >
          Preciso de ajuda
        </a>
      </div>

      <div
        style={{
          position: "relative",
          top: "80px",
        }}
      >
        <text style={{ ...copyrightText, color: darkMode ? WHITE : BLACK }}>
          © 2025 XPE Tecnologia. Todos os direitos reservados.
        </text>
      </div>
    </>
  );
}

export default Login;
