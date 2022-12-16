import React from 'react'
import imgSecundaria01 from '../assets/imgPrincipal004.png'
import '../styles/Calltoaction.css'

export default function CallToAction() {



  return (
    <div className='div-container-call'>

        <div className='div-container-text-call p-5'>
            <h1 className='title-call py-2'>Digitaliza tu negocio</h1>
            <h3>¿ Sos PYME o Emprendedor ?</h3>
            <p className='text-call py-2'>El equipo de <strong className='title-strong'>Art Set</strong> tiene lo mejor para vos, incrementa valor a tu negocio con presencia en internet. Desarrollamos tu sitio WEB, Tienda On-line, Aplicación Movil y mucho más.  </p>
            <div className='py-3'>
                <a href='www.google.com' className='nav-button button-call'>Elegí tu plan</a>
            </div>
        </div>

        <img className='img-principal' src={imgSecundaria01} alt="img computador" />




    </div>
  )
}
