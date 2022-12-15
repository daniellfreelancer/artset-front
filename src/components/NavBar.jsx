import React from "react";
import ReactSwitch from "react-switch";
import ASLogo from "../assets/artsetLogo.png";
import ASLogoLight from "../assets/artsetLogoLight.png";
import '../styles/Navbar.css'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

export default function NavBar(props) {
  let myTheme = props.theme;
  return (
    <nav className="div-nav">
      <div className="div-logo p-5">
        {
            myTheme === "light" ? (<img className="img-logo" src={ASLogo} alt="logo Art Set" />) : <img  className="img-logo" src={ASLogoLight} alt="logo Art Set" />
        }
        
      </div>

      <div className="div-buttons p-5">
        <a className="nav-button-a" href="https://google.com">Tienda On-Line</a>
        <a className="nav-button-a" href="https://google.com">Landing Page</a>
        <a className="nav-button-a " href="https://google.com">Movil Apps</a>
        <a className="ingreso-btn shadow" href="http://">Ingreso</a>
        <a className="nav-button shadow" href="http://">Registro</a>

      <div className="switch div-switch">
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
      </div>
      </div>



    </nav>
  );
}
