import React, { useContext } from "react";
import { ThemeContext } from "../layout/Layout";
import "../styles/Contact.css";

export default function Contact() {
  const myContext = useContext(ThemeContext);
  const myTheme = myContext.theme;
  return (
    <div className="container div-container-contact">
      <h4>¿ Tenés dudas ? Contáctanos</h4>

      <form action="" className="shadow-lg p-5 div-form" id="contact">
      <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Nombre y Apellido
          </label>
          <input
            type="email"
            className="form-control input-field input-contact"
            id={myTheme}
            placeholder="Nombre y Apellido"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control input-field input-contact"
            id={myTheme}
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Consulta
          </label>
          <textarea
            className="form-control input-field input-contact input-text-area"
            id={myTheme}
            rows="3"
            placeholder="Ingrese su consulta..."
          ></textarea>
        </div>
        <div className="mb-3">
            <button className="btn-suscribe shadow-lg btn-contact" >Enviar</button>
        </div>
      </form>
    </div>
  );
}
