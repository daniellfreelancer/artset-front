import React from 'react'
import '../styles/LogoLight.css'
import logoLight2 from '../assets/hexLight2.png'

export default function LogoLight() {
  return (
    <div className='div-logo' >
        <img src={logoLight2} className='logo-hex' alt='log-light'  />
        <h2 className='text-title-logo'>ArtSet</h2>
    </div>
  )
}
