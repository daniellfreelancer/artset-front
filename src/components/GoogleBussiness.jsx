import React from 'react'
import BusinessGoogleSVG from '../assets/google-mi-negocio.svg'
import '../styles/Bussines.css'
export default function GoogleBussiness() {
  return (
    <div className='d-flex justify-content-center align-items-center my-5 flex-wrap'>
        <img className='img-logo-bussiness'  src={BusinessGoogleSVG} alt='google mi negocio logo'/>
        <div className='div-text-bussiness'>
            <p className='text-one-bussines'>Te incluimos Gratis en cualquier plan</p>
            <h2 className='text-title-bussines'>¡ Aparecé Gratis en Google !</h2>
            <p className='text-three-bussines'>En los resusltados de búsqueda por zona o marca.</p>
        </div>
    </div>
  )
}
