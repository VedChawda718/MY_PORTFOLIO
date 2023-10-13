import React from 'react'
import IMG from '../../assets/img2.webp';
import IMG1 from '../../assets/img2.jpg';
import './projects.css';

const Projects = () => {
  return (
     <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className='container portfolio__container'>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG} alt="books"/>
                </div>
               
                <h3>IMMEDIATE-TIME VOICE COMMUNICATION USING RASPBERRI-Pi </h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/VedChawda718" className='btn' target='blank'>Github</a>
                <a href=" https://github.com/VedChawda718/Open-Book-API/" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG1} alt="books"/>
                </div>
               
                <h3>ARTISTIC SHOWCASE WEBSITE</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/VedChawda718/Kiran-Chawda" className='btn' target='blank'>Github</a>
                <a href=" https://kiran-chawda-718-nhwxrlu3t-vedchawda718.vercel.app/" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
        </div>
     </section>
  )
}

export default Projects