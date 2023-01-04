import React from 'react'
import '../styles/Include.css'
import checkD from '../assets/checkD.png'


export default function IncludeFeatures() {
const arrayInclude = [
    {
        id:"00001",
        img: checkD,
        text:"Nombre de dominio (www.tusitioweb.com) gratis durante 1 año"
    },
    {
        id:"00002",
        img: checkD,
        text:"Certificado de seguridad SSL (sitio seguro https) gratis durante 1 año"
    },
    {
        id:"00003",
        img: checkD,
        text:"Hosting web y multimedia (alojamiento web) gratis durante 1 año"
    },
    {
        id:"00004",
        img: checkD,
        text:"Sitio web totalmente integrado para web, móviles y todos los dispositivos"
    },
    {
        id:"00005",
        img: checkD,
        text:"Posicionamiento SEO, tu sitio web optimizado para motores de busqueda"
    },
    {
        id:"00006",
        img: checkD,
        text:"Control de stock, usuarios y pedidos a través de un administrador"
    },
    {
        id:"00007",
        img: checkD,
        text:"Catálogo, carrito de compra y métodos de pagos locales y extranjeros"
    },
    {
        id:"00008",
        img: checkD,
        text:"La capacidad de mostrar múltiples productos y servicios"
    },
    {
        id:"00009",
        img: checkD,
        text:"Acompañamiento por parte del equipo de ArtSet - Desarrollo Web"
    },

]
  return (
    <div className='container div-container-products-include py-5'>
        <h2>Todos nuestros productos incluyen</h2>
        <div className='div-container-include'>

        
        {
            arrayInclude.map((e)=>{
                return (
                    <div className='div-include' key={e.id}>
                        <div className='div-img-check'>
                        <img className='img-check' src={e.img} alt="check" />
                        </div>
                        <div>
                        <p className='text-include'>{e.text}</p>
                        </div>
                       
                    </div>
                )
            })
        }
</div>


        
    </div>
  )
}
