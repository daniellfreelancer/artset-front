import React from 'react'
import Banner01 from '../components/Banner01'
import CallToAction from '../components/CallToAction'
import OurServices from '../components/OurServices'
import WeAre from '../components/WeAre'
import Layout from '../layout/Layout'

export default function Welcome(props) {
  return (
<Layout>
    <CallToAction/>
    <WeAre/>
    <Banner01/>
    <OurServices/>
{/* 
planes
faq
tecnologias
testimonios
contacto
*/}
</Layout>
  )
}
