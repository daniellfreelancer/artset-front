import React from "react";
import "../styles/Cardbestseller.css";

import checkIT from "../assets/checkD.png";

export default function CardBestSeller() {
  return (
    <div className="div-card-best shadow-lg">
      <div>
        <h2>Tienda OnLine</h2>
        <p>Descripcion corta</p>
      </div>
      <div className="d-flex justify-content-center gap-2">
        <p className="btn-time">
            Mensual
        </p>
        /
        <p className="btn-time">
            Anual
        </p>
      </div>
      <div className="text-center py-3">
        <h4> Precio: $10000</h4>
       
      </div>
      <div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting</p>
        </div>
      </div>
      <div className="div-btn-comprar">
        <button className="btn btn-comprar" >Comprar</button>
      </div>
    </div>
  );
}
