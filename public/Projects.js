import React from 'react'
import IMG from '../../assets/img1.avif';
import IMG1 from '../../assets/img2.webp';
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
               
                <h3>GOOGLE BOOKS API</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/VedChawda718" className='btn' target='blank'>Github</a>
                <a href=" https://vedchawda718.github.io/Open-Book-API/" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={IMG1} alt="books"/>
                </div>
               
                <h3>REAL TIME AUDIO COMMUNICATION</h3>
                <div className="portfolio__item-cta">
                <a href="https://github.com/VedChawda718" className='btn' target='blank'>Github</a>
                <a href=" https://vedchawda718.github.io/Open-Book-API/" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
        </div>
     </section>
  )
}

export default Projects