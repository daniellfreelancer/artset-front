import React from "react";
import "../styles/Ourservices.css";
import icon001 from '../assets/webDesignColor.png'
import icon002 from '../assets/promotion.png'
import icon003 from '../assets/onlineColor.png'
import icon004 from '../assets/ideaColor.png'

export default function OurServices() {
    const arrayServices = [
        {
            id:"icon001",
            src:icon001,
            alt:"web icon",
            title:"Diseño Web",
            text:"Diseñamos tu sitio web desde cero, con un enfoque en la experiencia del usuario y la conversión, para maximizar el rendimiento de tu sitio web."
        },

        {
            id:"icon003",
            src:icon003,
            alt:"web icon",
            title:"Tienda On-Line",
            text:"Desarrollamos tu tienda On-Line, administra tu stock, maneja tus pedidos y recibe pagos con Mercadopago."
        },
        {
            id:"icon002",
            src:icon002,
            alt:"web icon",
            title:"Marketing Digital",
            text:"Creamos y manejamos tus campañas, potenciamos tu marca en: Facebook, Twitter, Instagram y Google Ads."
        },
        {
            id:"icon004",
            src:icon004,
            alt:"web icon",
            title:"Ideas Startups",
            text:"Ayudamos a desarrollar tu idea. Tambien si estás comenzando con tu PYME o Emprendimiento."
        }
    ]
  return (
    <div id="our-services" className="mt-5">
        <div className="div-our-services mt-5 mb-3">
            <h2>Nuestros Servicios</h2>
            <h5 className="px-4">Ofrecemos servicios personalizados y adaptados a las necesidades de tu negocio, a precios accesibles.</h5>
            <div className="div-line-services"></div>
        </div>


    <div className="py-5 div-container-services">
        {
            arrayServices.map((e)=>{
                return(
                    <div className="div-card-service p-3" key={e.id}>
                    <img className="img-icon-services" src={e.src} alt="web icon" />
                    <h3>{e.title}</h3>
                    <p className="text-service text-justify">
                      {e.text}
                    </p>
                  </div>
                )
            })
        }


    </div>
    </div>
  );
}
