import React from "react";
import "../styles/Cardbestseller.css";
import checkIT from "../assets/checkD.png";
import website from '../assets/sitio-web.png'
import tienda from '../assets/venta.png'
import landing from '../assets/landingPage.png'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function CardBestSeller() {

  const [dolar, setDolar] = useState()
  const [landingMonth, setLandingMonth] = useState()
  const [webSite, setWebSite] = useState()
  const [ecommerce, setEcommerce] = useState()

const [landingState, setLandingState] = useState(true)
const [ecommerceState, setEcommerceState] = useState(true)
const [websiteState, setWebsiteState] = useState(true)
 


  useEffect(() => {

      const intervailId = setInterval(()=>{
          axios.get('https://criptoya.com/api/dolar').then((res)=>{
              if (res.data){
                  let dataReceive = res.data
                  setDolar(dataReceive.oficial)
                  let landingPerMonth = dataReceive.oficial * 90;
                  let websitePerMonth = dataReceive.oficial * 140;
                  let ecommercePerMonth = dataReceive.oficial * 240;
                  setLandingMonth(landingPerMonth)
                  setWebSite(websitePerMonth)
                  setEcommerce(ecommercePerMonth)
                  console.log(dolar)
                  

              }

          }).catch((error)=>console.log(error))
      },5000)
      return()=>{
          clearInterval(intervailId)
      }
  }, [dolar])
  
  return (
    <div id="plan" className="div-best-sellers">

    {/* Card #1 */}
    <div className="div-card-best shadow-lg">
      <div className="text-center">
        <img src={landing} alt="tienda online" className="icon-card" />
        <h2 id="title-item-one"> <strong>Landing Page</strong> </h2>
        <p>Transforma tus visitantes en clientes potenciales</p>
      </div>
      <div className="text-center pt-2">
        {
          landingMonth ? (        <h4 className="price-title">Ar$ {landingState ? parseInt(landingMonth / 12 *0.30 + landingMonth / 12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')  : parseInt(landingMonth).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }</h4>) : <Loading/>
        }

        <p className="price-text">Precio por {landingState ? 'mes' : 'único'} </p>
        <div className="div-btn-price">
          <button className={landingState ? 'nav-button' : 'btn-price' } onClick={()=>setLandingState(true)}  >Mes</button>
          <button className={landingState ? 'btn-price' : 'nav-button' } onClick={()=>setLandingState(false)} >Único</button>
        </div>
       
      </div>
      <div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p><strong>Dominio</strong> com.ar</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p><strong>Hosting</strong> web</p>
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
          <p>Link a <strong>Whatsapp</strong></p>
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
        <h2 id="title-item-one"> <strong>Tienda OnLine</strong> </h2>
        <p>Crea un nuevo canal de ventas a través de internet</p>
      </div>
      <div className="text-center pt-2">
        {
          ecommerce ? (      <h4 className="price-title">Ar$ {ecommerceState ? parseInt(ecommerce / 12 *0.30 + ecommerce / 12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')  : parseInt(ecommerce).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }</h4>) : <Loading/>
        }


        <p className="price-text">Precio por {ecommerceState ? 'mes' : 'único'} </p>
        <div className="div-btn-price">
          <button className={ecommerceState ? 'nav-button' : 'btn-price' } onClick={()=>setEcommerceState(true)}  >Mes</button>
          <button className={ecommerceState ? 'btn-price' : 'nav-button' } onClick={()=>setEcommerceState(false)} >Único</button>
        </div>
       
      </div>
      <div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p><strong>Dominio</strong> com.ar</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p><strong>Hosting</strong> web</p>
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
          <p><strong>Base de datos</strong></p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Google Analytics</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p>Link a <strong>Whatsapp</strong></p>
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
        <h2 id="title-item-one"> <strong>Sitio Web</strong></h2>
        <p>Posiciona y digitaliza tu Marca en internet</p>
      </div>
      <div className="text-center pt-2">
      {
          webSite ? (      <h4 className="price-title">Ar$ {websiteState ? parseInt(webSite / 12 *0.30 + webSite / 12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')  : parseInt(webSite).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }</h4>) : <Loading/>
        }


        <p className="price-text">Precio por {websiteState ? 'mes' : 'único'} </p>
        <div className="div-btn-price">
          <button className={websiteState ? 'nav-button' : 'btn-price' } onClick={()=>setWebsiteState(true)}  >Mes</button>
          <button className={websiteState ? 'btn-price' : 'nav-button' } onClick={()=>setWebsiteState(false)} >Único</button>
        </div>
       
      </div>
      <div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p><strong>Dominio</strong> com.ar</p>
        </div>
        <div className="div-listed-include">
          <img src={checkIT} alt="item" className="item-check" />
          <p><strong>Hosting</strong> web</p>
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
          <p>Link a <strong>Whatsapp</strong></p>
        </div>
      </div>
      <div className="div-btn-comprar">
      <a className="btn btn-comprar"  rel="noreferrer" href="https://wa.me/543518523090/?text=%20Hola,%20quisiera%20tener%20mayor%20información%20sobre%20sitio%20Web" target="_blank" >Comprar</a>
      </div>
    </div>

    </div>

  );
}
