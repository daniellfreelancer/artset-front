import React from 'react'
import Banner01 from '../components/Banner01'
import CallToAction from '../components/CallToAction'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import IncludeFeatures from '../components/IncludeFeatures'
import OurServices from '../components/OurServices'
import WeAre from '../components/WeAre'
import Layout from '../layout/Layout'
import Banner02 from '../components/Banner02'
import BestSellers from '../components/BestSellers'
import Partners from '../components/Partners'

export default function Welcome(props) {
  return (
<Layout>
    <CallToAction/>
    <WeAre/>
    <Banner01/>
    <Banner02/>
    <OurServices/>
    <IncludeFeatures/>
    <BestSellers/>

{/* 
planes
faq
tecnologias
testimonios
contacto
*/}
<FAQ/>
<Partners/>
<Contact/>
</Layout>
  )
}
