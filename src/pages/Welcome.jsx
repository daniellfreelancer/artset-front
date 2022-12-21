import React from 'react'
import CallToAction from '../components/CallToAction'
import OurServices from '../components/OurServices'
import WeAre from '../components/WeAre'
import Layout from '../layout/Layout'

export default function Welcome(props) {
  return (
<Layout>
    <CallToAction/>
    <OurServices/>
    <WeAre/>
</Layout>
  )
}
