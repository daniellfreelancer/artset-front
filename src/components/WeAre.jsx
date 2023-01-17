import React, { useContext } from "react";
import logoTextDark from "../assets/artsetDarkOnly.svg";
import logoTextLight from "../assets/artsetLigthOnly.svg";
import { ThemeContext } from "../layout/Layout";
import "../styles/Weare.css";

export default function WeAre() {
  const myContext = useContext(ThemeContext);

  const theme = myContext.theme;

  return (
    <div className="div-quienes-somos py-5 " id="we-are">
      <h2>Somos una Empresa 100% Digital</h2>
      <h5>
        Líder en diseño y desarrollo de sitios web en Argentina y latinoamerica.
      </h5>
      <div className="div-line-services"></div>
      <div className="div-quienes-somos-img-card py-5">
        <div className="img-quienes-somos"></div>
        <div className="div-card-quienes p-5">
          {theme === "dark" ? (
            <img className="img-logo-text" src={logoTextDark} alt="web icon" />
          ) : (
            <img className="img-logo-text" src={logoTextLight} alt="web icon" />
          )}
          <p>
            Nuestra agencia ofrece soluciones profesionales de desarrollo web,
            ademas contamos con el servicio de Marketing digital para ayudarte a
            posicionar y a mejorar tu marca con un precio accsesible para una
            mejor experiencia del cliente.
            <br />
            <br />
            Nuestros desarrolladores web tienen las habilidades y la experiencia
            para diseñar un sitio web moderno, inteligente y atractivo para
            captar nuevos clientes para tu negocio.
          </p>
        </div>
      </div>
    </div>
  );
}
