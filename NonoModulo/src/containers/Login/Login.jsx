import React from "react";
import Ink from "react-ink";
import { endpoints } from "../../modules/endpoints";
import backgroundImageMobile from "../../assets/images/app-intro-1.jpg";
import backgroundImageDesktop from "../../assets/images/app-intro-2.jpg";
import { Logo } from "../../components";
import "./Login.scss";
import { useLogin } from "../../utils/hooks";

const Login = () => {
  const { isMobile, screenWidth } = useLogin();
  return (
    <main
      className="login"
      data-testid="login"
      style={{
        backgroundImage: `url(${
          isMobile || screenWidth <= 768
            ? backgroundImageMobile
            : backgroundImageDesktop
        })`,
      }}
    >
      <div className="container">
        <Logo />
        <h2 className="login__microcopy">
          Não toca a música inteira,
          <strong>
            {" "}
            mas toca o seu{" "}
            <span
              role="img"
              className="login__microcopy__heart"
              aria-label="Coração"
            >
              ❤️
            </span>
          </strong>
        </h2>
        <a href={endpoints.getAuthorization.url} className="login__auth-button">
          Entrar com Spotify
          <Ink />
        </a>
      </div>
    </main>
  );
};

export default Login;

