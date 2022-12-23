import React, { useContext } from "react";
import { ThemeContext } from "../layout/Layout";
import "../styles/Footer.css";
import ASLogo from "../assets/artsetLogo.png";
import ASLogoLight from "../assets/artsetLogoDark.png";
import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/instagram.png';
import twitterLogo from '../assets/gorjeo.png';
import linkedinLogo from '../assets/linkedin.png';

export default function Footer() {
  const myContext = useContext(ThemeContext);
  const myTheme = myContext.theme;


  return (
    <div className="div-footer-global pt-5">
      <div className="div-footer-first col-lg-3">
        {myTheme === "light" ? (
          <img className="img-logo" src={ASLogo} alt="logo Art Set" />
        ) : (
          <img className="img-logo" src={ASLogoLight} alt="logo Art Set" />
        )}
      </div>
      <div className="div-footer-second col-lg-3 px-5">
        <h4 className="">Recursos y Ayuda</h4>
        <ul>
          <li><a href="#our-service">Soporte</a></li>
          <li><a href="#plan">Formas de pago</a></li>
          <li><a href="#promo">Área de clientes</a></li>
          <li><a href="#privacity">Política de privacidad</a></li>
          <li><a href="#conditions">Términos y condiciones</a></li>
        </ul>
      </div>
      <div className="div-footer-third col-lg-3">
        <div className="div-form">
          <input
            type="email"
            className="input-field shadow-lg"
            placeholder="Correo Electrónico"
            id={myTheme}
          />
          <button className="btn-suscribe shadow-lg">
            Suscribirme
          </button>
        </div>
        <div className="div-social-media">
          <a className="link-social-media" href="https://facebook.com" target="a_blank" rel="noreferrer" ><img src={facebookLogo} alt="social-media" className="social-media-icon" /></a>
          <a className="link-social-media" href="https://facebook.com" target="a_blank" rel="noreferrer" ><img src={instagramLogo} alt="social-media" className="social-media-icon" /></a>
          <a className="link-social-media" href="https://facebook.com" target="a_blank" rel="noreferrer" ><img src={twitterLogo} alt="social-media" className="social-media-icon" /></a>
          <a className="link-social-media" href="https://facebook.com" target="a_blank" rel="noreferrer" ><img src={linkedinLogo} alt="social-media" className="social-media-icon" /></a>
          
        </div>
      </div>
    </div>
  );
}
