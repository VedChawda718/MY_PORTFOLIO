import React from 'react'
import './footer.css'


const footer = () => {
  return (
    <footer id='footer'>
         
        <a href="#" className='footer__logo'>Ved Chawda</a>

        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
       
        <div className="footer__socials">
            <a href="https://www.instagram.com/vedchawda.718/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/ved.chawda.3?mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a>
            <a href="mailto:vedchawda@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; <a href="https://www.linkedin.com/in/ved-chawda-574b19224/">Ved Chawda</a>.All rights reserved</small>
        </div>

    </footer>
  )
}

export default footer