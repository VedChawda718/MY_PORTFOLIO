import React from 'react';
import Header from './header/Header';
import Nav from './nav/Nav';
import About from './about/About';
import Experience from './experience/Experience';
import Projects from './projects/Projects'
import Services from './services/Services';
import Hobbies from './Hobbies/Hob_Int'
import Contacts from './contact/Contact';
import Footer from './footer/footer';
 

const Main = () => {
  return (
    <>
      <Header />
      <hr />
      <Nav />
      <hr />
      <About />
      <hr />
      <Experience />
      <hr />
      <Projects/>
      <hr />
      <Services />
      <hr />
      <Hobbies/>
      <hr />
      <Contacts />
      <hr />
      <Footer id="footer" /> {/* Add the id "footer" to the Footer component */}
    </>
  );
};

export default Main;
