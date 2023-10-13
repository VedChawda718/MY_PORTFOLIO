import React from 'react'
import ME from '../../assets/img2.avif'
import './about.css'


const About = () => {
  return (
    <section className='about' id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <i className="fa-solid fa-folder-closed"></i>
            <a href='#projects' ><h5>Projects</h5></a>
            </article>
            <article className="about__card">
            <i class="fa-solid fa-palette"></i>
            <a href="#hobbies"><h5>Hobbies & Intrests</h5></a>
            </article>
            <article className="about__card">
            <i class="fa-solid fa-certificate"></i>
            <a href=""><h5>Certificates & Courses</h5></a>
            </article>
          </div>
          
            <p>
            "I'm a frontend developer with a passion for crafting intuitive user interfaces. 
            When I'm not coding, you can find me on the football field. 
            I'm also an avid sketch artist, constantly exploring my creativity by bringing ideas to life on paper.
            
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default About