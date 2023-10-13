import React from 'react';
import './hob_int.css';
import VID from '../../assets/freestyle.mp4';
import DAAJI from '../../assets/daaji.jpg';
import DR from '../../assets/darshanraval.jpg';
import MD from '../../assets/maradona.jpg';
import CR7 from '../../assets/cr7.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Hob_Int = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}
  return (
    
   
    <Carousel responsive={responsive}  autoPlay={true} autoPlaySpeed={15000}  keyBoardControl={true} dotListClass="custom-dot-list-style "   infinite={true} containerClass="carousel-container" itemClass="carousel-item-padding-40-px"  >
      <section className="hobbies-wrapper">
      <h5>Hobbies And Intrests</h5>
      <h2>Freestyle Football</h2>
      <div className="hobbies-holder">
        <div className="title">
          <div className="graphics-video">
            <video controls autoPlay loop src={VID}></video>
          </div>
        </div>
        </div>
      </section>
      <section className="hobbies-wrapper">
      <h5>Hobbies And Intrests</h5>
      <h2>Sketching</h2>
      <div className="hobbies-holder">
        <div className="title">
          <div className="graphics-images">
           <Carousel responsive={responsive}x autoPlay={true} autoPlaySpeed={1650}  removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop" ]}  infinite={true}     >
            <img src={DAAJI} alt="" />
            <img src={DR} alt="" />
            <img src={CR7} alt="" />
            <img src={MD} alt="" />
            </Carousel>
          </div>
          <div className="details">
          </div>
        </div>
        </div>
      </section>
    </Carousel>
  
  )
}

export default Hob_Int