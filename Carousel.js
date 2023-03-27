import React from 'react'
import Booking from './Booking';


function Carousel(props) {
  // console.log(props.name);
  // console.log(props.age);
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="hotel1.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="hotel2.png" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="hotel3.png" alt="Third slide" />
        </div>
      </div>
      <div className="carousel-overlay"></div>
      <div className="carousel-content">
        <Booking />
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel
