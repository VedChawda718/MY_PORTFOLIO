import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>HTML</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>ReactJs</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          </div>


        </div>
        <div className="languages__tools">
        <h3>Languages & Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>JAVA</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>SQL</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>C++</h4>
            <small className="text-light">Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
            <i class="fa-solid fa-circle-check"></i>
            <div>
            <h4>VS-Code(Tool)</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          </div>


         </div>
        
      </div>
    </section>
  )
}

export default Experience