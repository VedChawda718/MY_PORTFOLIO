import React, { useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Typed from 'typed.js';

const Header = () => {
  useEffect(() => {
    const typed = new Typed(".text-light", {
      strings: ["'' Frontend Developer''", "'' Freestyle Footballer ''", "'' Sketch Artist ''"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: false,
      cursorChar:''
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header header__container ">
        <h5>Hello I'm</h5>
        <h1>Ved Chawda</h1>
        <h5 className="text-light"></h5>
        <CTA />
        <HeaderSocials />
        <div className="me"></div>

        <a href="#about" className='scroll__down'>Scroll Down <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </header>
  );
};

export default Header;
