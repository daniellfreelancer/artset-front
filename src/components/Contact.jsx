import React, { useContext, useRef } from "react";
import { ThemeContext } from "../layout/Layout";
import "../styles/Contact.css";
import swal from 'sweetalert2';
import { useCreateContactMutation } from "../features/emailAPI";

export default function Contact() {
  const myContext = useContext(ThemeContext);
  const myTheme = myContext.theme;

  const emailContact = useRef();
  const nameContact = useRef();
  const textContact = useRef();

  const [addNewContactMessage] = useCreateContactMutation();
  

  const handleContactForm = (e) => {
    e.preventDefault();

    let newMessage = {
      email:emailContact.current.value,
      fullName:nameContact.current.value,
      areaText:textContact.current.value
    }

    addNewContactMessage(newMessage).then((res)=>{
      if (res.error){
        let dataError = res.error
        let dataMessage = dataError.data
        swal.fire({
          title: "Error!",
          text: dataMessage.message,
          icon: "error",
        });

        } else {

          let dataResponse = res.data
          let dataSuccess = dataResponse.message
          swal.fire({
            text: dataSuccess,
            icon: "success",
          });
          let inputForm = document.querySelector("#contact");
          inputForm.reset();

        }
    }).catch((error) =>{
      console.log(error)
    })



  }


  return (
    <div className="container div-container-contact py-5">
      <h4>¿ Tenés dudas ? Contáctanos</h4>

      <form className="shadow-lg p-5 div-form" id="contact">
      <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre y Apellido
          </label>
          <input
            type="email"
            className="form-control input-field input-contact"
            id={myTheme}
            placeholder="Nombre y Apellido"
            ref={nameContact}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="form-control input-field input-contact"
            id={myTheme}
            placeholder="Correo Electrónico"
            ref={emailContact}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Consulta
          </label>
          <textarea
            className="form-control input-field input-contact input-text-area"
            id={myTheme}
            rows="3"
            placeholder="Ingrese su consulta..."
            ref={textContact}
          ></textarea>
        </div>
        <div className="mb-3">
            <button onClick={handleContactForm} className="btn-suscribe shadow-lg btn-contact" >Enviar</button>
        </div>
      </form>
    </div>
  );
}
