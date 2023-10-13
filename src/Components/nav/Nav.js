import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [activeNav, setActivenav] = useState('#');
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerSection = document.getElementById('footer');
      const footerPosition = footerSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate the distance between the footer and the bottom of the window
      const distanceToFooter = footerPosition - windowHeight;

      // Hide the nav bar when the user reaches the footer section
      setHideNav(distanceToFooter < 0);
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ display: hideNav ? 'none' : 'flex' }}>
          
      <a href="#"  onClick={()=> setActivenav('#')} className={activeNav === '#' ? 'active' : ''}><i class="fa-solid fa-house"></i></a>
      <a href="#about"  onClick={()=> setActivenav('#about')} className={activeNav === '#' ? 'active' : ''}><i class="fa-solid fa-user"></i></a>
      <a href="#experience"  onClick={()=> setActivenav('#experience')} className={activeNav === '#' ? 'active' : ''}><i class="fa-solid fa-book"></i></a>
      <a href="#services"  onClick={()=> setActivenav('#services')} className={activeNav === '#' ? 'active' : ''}><i class="fa-solid fa-handshake-angle"></i></a>
      <a href="#contact"  onClick={()=> setActivenav('#contact')} className={activeNav === '#' ? 'active' : ''}><i class="fa-solid fa-address-book"></i></a>
    </nav>
  );
};

export default Nav;
