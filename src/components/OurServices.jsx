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
            text:"Diseñamos tu sitio web desde cero, todos nuestros planes incluyen Hosting y Dominio gratis."
        },

        {
            id:"icon003",
            src:icon003,
            alt:"web icon",
            title:"Tienda On-Line",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,tenetur voluptate delectus dolore velit."
        },
        {
            id:"icon002",
            src:icon002,
            alt:"web icon",
            title:"Marketing Digital",
            text:"Creamos campañas publicitarias en redes sociales y potenciamos tu marca."
        },
        {
            id:"icon004",
            src:icon004,
            alt:"web icon",
            title:"Ideas Startups",
            text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,tenetur voluptate delectus dolore velit."
        }
    ]
  return (
    <div id="our-services">
        <div className="div-our-services mt-5 mb-3">
            <h2>Nuestros Servicios</h2>
            <p className="px-4">Ofrecemos diferentes tipos de servicios Digitales y Marketing para tu negocio, a un precio ideal.</p>
            <div className="div-line-services"></div>
        </div>


    <div className="py-5 div-container-services">
        {
            arrayServices.map((e)=>{
                return(
                    <div className="div-card-service p-3" key={e.id}>
                    <img className="img-icon-services" src={e.src} alt="web icon" />
                    <h3>{e.title}</h3>
                    <p className="text-service">
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
