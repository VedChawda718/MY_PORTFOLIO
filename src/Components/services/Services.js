import React from 'react'
import './services.css'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
            <i class="fa-solid fa-check"></i>
            <p><b>Website Layout and Design</b> </p>
            </li>
            <li>
            <i class="fa-solid fa-check"></i>
            <p><b>Responsive Web Development</b> </p>
            </li>
            <li>
            <i class="fa-solid fa-check"></i>
            <p><b>Frontend Frameworks and Libraries</b> </p>
            </li>
            <li>
            <i class="fa-solid fa-check"></i>
            <p><b>Bug Fixing and Troubleshooting</b> </p>
            </li>
            <li>
            <i class="fa-solid fa-check"></i>
            <p><b>Testing and Debugging</b> </p>
            </li>
            <li>
            <i class="fa-solid fa-check"></i>
            <p><b>Learning New Technologies</b> </p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services