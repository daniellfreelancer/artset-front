import React from "react";
import stockIcon from "../assets/stock.png";
import '../styles/Banner01.css'


export default function Banner01() {
  return (
    <div className="div-banner01">
      <div className="div-text-banner01">
        <div className="div-card-banner01 p-5">
          <img className="img-icon-banner01" src={stockIcon} alt="web icon" />
        <h2>Autogestiona tu Stock</h2>
          <p className="text-banner01">
            En tu tienda On-Line tendrás a disposicion un tablero para gestionar tu stock. 
            <br />
            <br />
            Nuestros desarrolladores web tienen las habilidades y la experiencia
            para diseñar un sitio web moderno, inteligente y atractivo para
            captar nuevos clientes para tu negocio.
          </p>
        </div>
      </div>
      <div className="div-img-banner01"></div>
    </div>
  );
}
