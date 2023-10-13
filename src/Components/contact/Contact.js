import React from 'react'
import './contact.css'
import  { useRef } from 'react';
import emailjs from 'emailjs-com' 
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5sv420c', 'template_ldz2tdt', form.current, 'lTltjnscyRiIOtSmM')   
    e.target.reset()
  };

  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
        <i class="fa-solid fa-at"></i>
          <h4>Email</h4>
          <h5>vedchawda@gmail.com</h5>
          <a href="mailto: vedchawda@gmail.com" target='blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <i class="fa-brands fa-linkedin-in"></i>
          <h4>LinkedIn</h4>
          <h5>Ved Chawda</h5>
          <a href="https://www.linkedin.com/in/ved-chawda-574b19224/" target='blank'>Send a message</a>
        </article>
        <article className="contact__option">
        <i class="fa-brands fa-whatsapp"></i>
          <h4>WhatsApp</h4>
          <h5>+91-9579669607</h5>
          <a href="https://api.whatsapp.com/send?phone=+919579669607" target='blank'>Send a message</a>
        </article> 
        </div>
        <div className='user__container'>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
    </div>
   </section>
  )
}

export default Contact