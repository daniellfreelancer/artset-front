import React from 'react'
import '../styles/Banner01.css'
import brandIcon from '../assets/marca.png'

export default function Banner02() {
  return (
    <div className="div-banner01 div-banner02">
        <div className="div-img-banner02"></div>
      <div className="div-text-banner01">
        <div className="div-card-banner01 p-5">
          <img className="img-icon-banner01" src={brandIcon} alt="web icon" />
        <h2>Potenciamos tu Marca</h2>
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
      
    </div>
  )
}
