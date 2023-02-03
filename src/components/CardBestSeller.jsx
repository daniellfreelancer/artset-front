import React from "react";
import "../styles/Cardbestseller.css";
import checkIT from "../assets/checkD.png";
import website from '../assets/sitio-web.png'
import tienda from '../assets/venta.png'
import landing from '../assets/landingPage.png'

export default function CardBestSeller() {
  return (
    <div id="plan" className="div-best-sellers">

    {/* Card #1 */}
    <div className="div-card-best shadow-lg">
      <div className="text-center">
        <img src={landing} alt="tienda online" className="icon-card" />
        <h2 id="title-item-one">Landing Page</h2>
        <p>Transforma tus visitantes en clientes potenciales</p>
      </div>
      <div className="text-center pt-2">
        <h4 className="price-title">AR$ 2.990</h4>
        <p className="price-text">Precio por mes</p>
       
      </div>
      <div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Dominio com.ar</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting web</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>5 Secciones</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Formulario de contacto</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Link a Whatsapp</p>
        </div>
      </div>
      <div className="div-btn-comprar">
        <a className="btn btn-comprar"  rel="noreferrer" href="https://wa.me/543518523090/?text=%20Hola,%20quisiera%20tener%20mayor%20información%20sobre%20Landing%20Page" target="_blank" >Comprar</a>
       
      </div>
    </div>
    {/* Card #2 */}
    <div className="div-card-best card-central shadow-lg">
      <div className="text-center">
        <img src={tienda} alt="tienda online" className="icon-card" />
        <h2>Tienda OnLine</h2>
        <p>Crea un nuevo canal de ventas a través de internet</p>
      </div>
      <div className="text-center pt-2">
        <h4 className="price-title">AR$ 5.990</h4>
        <p className="price-text">Precio por mes</p>
       
      </div>
      <div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Dominio com.ar</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting web</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Stock Administrable</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Correo Empresarial</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Usuario Administrador</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Google Analytics</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Link a Whatsapp</p>
        </div>
      </div>
      <div className="div-btn-comprar">
      <a className="btn btn-comprar"  rel="noreferrer" href="https://wa.me/543518523090/?text=%20Hola,%20quisiera%20tener%20mayor%20información%20sobre%20Tienda%20Online" target="_blank" >Comprar</a>
      </div>
    </div>

    {/* Clard #3 */}
    <div className="div-card-best shadow-lg">
      <div className="text-center">
        <img src={website} alt="tienda online" className="icon-card" />
        <h2>Sitio Web</h2>
        <p>Posiciona y digitaliza tu Marca en internet</p>
      </div>
      <div className="text-center pt-2">
        <h4 className="price-title">AR$ 4.990</h4>
        <p className="price-text">Precio por mes</p>
       
      </div>
      <div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Dominio com.ar</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Hosting web</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>5 Paginas</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Correo empresarial</p>
        </div>{" "}
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Link a Whatsapp</p>
        </div>
      </div>
      <div className="div-btn-comprar">
      <a className="btn btn-comprar"  rel="noreferrer" href="https://wa.me/543518523090/?text=%20Hola,%20quisiera%20tener%20mayor%20información%20sobre%20sitio%20Web" target="_blank" >Comprar</a>
      </div>
    </div>

    </div>

  );
}
