import React from "react";
import "../styles/Calltoaction.css";
import imgCallToAction from "../assets/App5.svg";
import ReactTyped from "react-typed";

export default function CallToAction() {
  return (
    <div className="div-container-call">
      <div className="div-container-text-call p-5">
        <h1 id="text-call-to" className="title-call py-2">¿Quieres digitalizar tu negocio?</h1>
        <ReactTyped
          className="title-call text-call-type py-2"
          strings={[
            "¿Quieres digitalizar tu negocio?",
            "Incrementar tu presencia online",
            "¿Llevarlo al siguiente nivel?",
            "ArtSet Desarrollo Web y Digital",
          ]}
          typeSpeed={50}
          backSpeed={50}
        />
        <p className="text-call py-2">
          Si eres una PYME o emprendedor,{" "}
          <strong className="title-strong">el equipo de ArtSet</strong> tiene
          lo que necesitas para mejorar tu presencia en internet y aumentar el
          valor de tu negocio. Ofrecemos servicios de desarrollo de sitios web,
          tiendas en línea, aplicaciones móviles y mucho más. Con nuestra
          experiencia y conocimientos, te ayudaremos a maximizar tu alcance en
          línea y a atraer a más clientes potenciales.
        </p>
        <div className="py-3">
          <a href="#contact" className="nav-button button-call">
            ¡Contáctanos!
          </a>
        </div>
      </div>

      <img
        className="img-principal img-carousel-01"
        src={imgCallToAction}
        alt="img principal"
      />
    </div>
  );
}
