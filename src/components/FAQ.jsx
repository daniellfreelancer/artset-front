import React, { useState } from 'react'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import '../styles/FAQ.css'

export default function FAQ() {

    const [firstQ, setFirstQ] = useState(false);
    const [secondQ, setSecondQ] = useState(false);
    const [thirdQ, setThirdQ] = useState(false);
    const [fourQ, setFourQ] = useState(false);

    const handleFirst = ()=>{setFirstQ(!firstQ)}
    const handleSecond = ()=>{setSecondQ(!secondQ)}
    const handleThird = ()=>{setThirdQ(!thirdQ)}
    const handleFour = ()=>{setFourQ(!fourQ)}

  return (
    <div  className='container div-faqs my-5 pb-5'>
        <h4 className='pb-3' id='faq'>Preguntas frecuentes</h4>

        <div className='div-faq-text div-faq-first'>
            <span className='div-span'>
                <h5>Quiero crear mi sitio web, como comienzo?</h5>
                {
                    !firstQ ? (<img src={plus} alt="icon-list" className='icon-acordeon' onClick={handleFirst} />) : (<img src={minus} alt="icon-list" className='icon-acordeon' onClick={handleFirst} />)
                }
                
            </span>
            { firstQ ? (<p>Ingresa a nuestro sitio web <strong>www.asweb.com.ar</strong>, selecciona tu producto, realiza el pago de tu plan y comenzaremos de inmediato a crear tu sitio web.</p>) : null
                
            }
        </div>
        <div className='div-faq-text'>
            <span className='div-span'>
                <h5>Incluye el dominio y alojamiento web?</h5>
                {
                    !secondQ ? (<img src={plus} alt="icon-list" className='icon-acordeon' onClick={handleSecond} />) : (<img src={minus} alt="icon-list" className='icon-acordeon' onClick={handleSecond} />)
                }
                
            </span>
            { secondQ ? (<p>Si, todos nuestros planes de sitios web y tiendas online incluyen <strong>dominio y hosting gratis</strong>  por 1 año, los cuales son renovables anualmente.</p>) : null
                
            }
        </div>
        <div className='div-faq-text'>
            <span className='div-span'>
                <h5>Como realizo el pago?</h5>
                {
                    !thirdQ ? (<img src={plus} alt="icon-list" className='icon-acordeon' onClick={handleThird} />) : (<img src={minus} alt="icon-list" className='icon-acordeon' onClick={handleThird} />)
                }
                
            </span>
            { thirdQ ? (<p>Puedes contratar tu producto preferido en nuestra página de productos y realizar el pago a través de  <strong>Mercadopago</strong>.</p>) : null
                
            }
        </div>
        <div className='div-faq-text'>
            <span className='div-span'>
                <h5>En cuanto tiempo esta listo mi sitio web?</h5>
                {
                    !fourQ ? (<img src={plus} alt="icon-list" className='icon-acordeon' onClick={handleFour} />) : (<img src={minus} alt="icon-list" className='icon-acordeon' onClick={handleFour} />)
                }
                
            </span>
            { fourQ ? (<p>El tiempo de gestión para el desarrollo y configuración de sitios web y tiendas online, es entre 05 a 25 días hábiles, esto varía según el producto seleccionado.</p>) : null
                
            }
        </div>

    </div>
  )
}
