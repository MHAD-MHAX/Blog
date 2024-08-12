import React from 'react'

import Image3 from "./images/img-auto5.jpg";
import Image4 from "./images/img-auto5.jpg";
import Image5 from "./images/img-auto2.jpg";

import { Link } from "react-router-dom";


const Auto = () => {
  return (
    <div className='auto'>
        <h1 className='header'>AUTOMOBILES</h1>
        <div className='oops'>
      <div class="card4">
        <img src={Image3} alt="Card Image" class="card-image"/>
        <div className="text">
        <p class="card-description">Electric vehicles are revolutionizing the automobile industry with their eco-friendly technology and impressive efficiency.</p>
       
       <Link to="/auto">
        <button>Read more</button>
        </Link>
        </div>
      </div>
      <div class="card4">
        <img src={Image4} alt="Card Image" class="card-image"/>
        <div className="text">
        <p class="card-description">Regular maintenance, including oil changes and tire rotations, is crucial for keeping your car running smoothly and extending its lifespan.</p>
        <Link to="/auto">
        <button>Read more</button>
        </Link>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Auto;