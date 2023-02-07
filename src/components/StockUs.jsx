import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'

export default function StockUs() {

    const [dolar, setDolar] = useState()

    useEffect(() => {

        const intervailId = setInterval(()=>{
            axios.get('https://criptoya.com/api/dolar').then((res)=>{
                if (res.data){
                    let dataReceive = res.data
                    console.log(dataReceive.oficial)
                    setDolar(dataReceive.oficial)
                }

            }).catch((error)=>console.log(error))
        },5000)

        return()=>{
            clearInterval(intervailId)
        }

    }, [])
    




  return (
    <div className='div-stock'>
        <p>Cotización dolar oficial BNA: <strong>{dolar ? dolar : <Loading/>}</strong> Ars</p>
    </div>
  )
}
