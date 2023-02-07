import React from 'react'
import Digital from '../assets/digitalocean-2.svg';
import MercadoPago from '../assets/mercadopago.svg'
import Facebook from '../assets/facebook-ads.svg'
import Google from '../assets/google-mi-negocio.svg';
import Adwords from '../assets/google-adwords.svg'
import '../styles/Partners.css'


export default function Partners() {

    const arrayPartnerts = [
        {
            id:"digitalOcean",
            src:Digital,
            alt:"DigitalOcean Logo"
        },
        {
            id:"MercadoPago",
            src:MercadoPago,
            alt:"MercadoPago Logo"
        },
        {
            id:"Facebook",
            src:Facebook,
            alt:"Facebook Logo"
        },
        {
            id:"Google",
            src:Google,
            alt:"Google Logo"
        },
        {
            id:"Adwords",
            src:Adwords,
            alt:"Adwords Logo"
        },

    ]
  return (
    <div className='div-partners container-fluid mt-5 '>
        <h2 className='title-partners mb-5'>Partners</h2>
        <div className='div-img-partners'>
            {
                arrayPartnerts.map((item)=>{
                    return (
                        <img key={item.id} src={item.src} alt={item.alt} className='logo-partners' />
                    )
                })
            }
        </div>
    </div>
  )
}
