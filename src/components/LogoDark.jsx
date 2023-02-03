import React from 'react'
import '../styles/LogoLight.css'
import logoDark2 from '../assets/hexDark2.png'

export default function LogoDark() {
  return (
    <div className='div-logo' >
    <img src={logoDark2} className='logo-hex' alt='log-light'  />
    <h2 className='text-title-logo'>ArtSet</h2>
</div>
  )
}
