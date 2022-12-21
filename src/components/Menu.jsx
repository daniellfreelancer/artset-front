import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import '../styles/Navbar.css'
import '../index.css'


export default function Menu() {



    const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className='btn-drawer-menu m-5' onClick={showDrawer}>
        MENÚ
      </Button>
      <Drawer title="Art Set | Desarrollo Web y Movil" placement="right"  onClose={onClose} open={open}>
        <div className='div-drawer-menu'>
        <a className="nav-button-a nav-button-menu" href="#our-services">Servicios</a>
        <a className="nav-button-a nav-button-menu" href="#we-are">Quiénes Somos</a>
        <a className="nav-button-a nav-button-menu" href="https://google.com">Marketing Digital</a>
        <a className="nav-button-a nav-button-menu" href="https://google.com">Productos</a>
        <a className="nav-button-a nav-button-menu" href="https://google.com">Contacto</a>
        <a className="ingreso-btn shadow nav-button-menu" href="http://">Ingreso</a>
        <a className="nav-button shadow" href="http://">Registro</a>

        </div>

      {/* <div className="switch div-switch">
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
      </div> */}

      </Drawer>
    </>
  )
}
