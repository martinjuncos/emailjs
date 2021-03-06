import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Form.module.css'

export default function ContactUs  () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_biq34kj', 'template_u82bwka', form.current, 'QB_YGsFz8TqzByi-w')
      .then((result) => {          
        console.log(result.text);        
      }, (error) => {
          console.log(error.text);
          alert('Su mensaje no pudo enviarse')
      });
      e.target.reset()
      alert('Mensaje enviado!')
  };

  return (
      <div className={styles.container}> 
          <h1>Contactenos</h1>
    <form className={styles.formmail} ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" placeholder='Nombre...' name="user_name" required />

      <label>Telefono</label>
      <input type="tel" placeholder='telefono...' name="user_tel" required />

      <label>Email</label>
      <input type="email" placeholder='mail...' name="user_email" />

      <label>Mensaje</label>
      <textarea type="text" placeholder='Su mensaje...' name="message" required />
      
      <input className={styles.button} type="submit" value="Enviar" />
    </form>

    </div>
  );
};