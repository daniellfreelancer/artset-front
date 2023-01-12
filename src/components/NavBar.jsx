import React from "react";
import ReactSwitch from "react-switch";
// import ASLogo from "../assets/artsetLogo.png";
// import ASLogoLight from "../assets/artsetLogoDark.png";
import ASLogo from "../assets/artsetLogoModoLight.png";
import ASLogoLight from "../assets/artsetLogoModoDark.png";
import '../styles/Navbar.css'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'
import Menu from "./Menu";


export default function NavBar(props) {
  let myTheme = props.theme;

  const arrayNav = [
    {
      id:"nav01",
      class:"nav-button-a",
      ref:"#we-are",
      title:"Quiénes Somos"
    },
    {
      id:"nav02",
      class:"nav-button-a",
      ref:"#our-services",
      title:"Servicios"
    },
    {
      id:"nav03",
      class:"nav-button-a",
      ref:"#plan",
      title:"Planes"
    },
    {
      id:"nav04",
      class:"nav-button-a",
      ref:"#witness",
      title:"Testimonios"
    },
    {
      id:"nav05",
      class:"nav-button-a",
      ref:"#faq",
      title:"FAQ"
    },
    {
      id:"nav06",
      class:"nav-button-a",
      ref:"#contact",
      title:"Contacto"
    },
  ]
  return (
    <nav className="div-nav">
      <div className="div-logo p-5">
        {
            myTheme === "light" ? (<img className="img-logo" src={ASLogo} alt="logo Art Set" />) : <img  className="img-logo" src={ASLogoLight} alt="logo Art Set" />
        }
        
      </div>

      <div className="div-buttons p-5">
        {
          arrayNav.map((a)=><a key={a.id} className={a.class} href={a.ref}>{a.title}</a>)
        }
        <a className="ingreso-btn shadow" href="http://">Ingreso</a>
        <a className="nav-button shadow" href="http://">Registro</a>

      <div className="switch div-switch">
        <label> {myTheme === "light" ?  ( <img className="icon-dark-mode" src={moon} alt="moon"/> ) : ( <img className="icon-dark-mode" src={sun} alt="sun"/> )}</label>
        <ReactSwitch
          onChange={props.onChange}
          checked={myTheme === "dark"}
          onColor="#8bce75"
          onHandleColor="#8bce75"
          handleDiameter={17}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={24}
          width={40}
          className="react-switch"
          id="small-radius-switch"
        />
      </div>
      </div>

      <Menu/>
      <span className="span-swicth">
      <label> {myTheme === "light" ? ( <img className="icon-dark-mode" src={sun} alt="sun"/> ) : ( <img className="icon-dark-mode" src={moon} alt="moon"/> )}</label>
        <ReactSwitch
          onChange={props.onChange}
          checked={myTheme === "dark"}
          onColor="#8bce75"
          onHandleColor="#8bce75"
          handleDiameter={17}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={24}
          width={40}
          className="react-switch"
          id="small-radius-switch"
        />
      </span>

    </nav>
  );
}
