import React from 'react'

import Image3 from "./images/health-1.jpg";
import Image4 from "./images/health-2.jpg";
import Image5 from "./images/health-4.jpg";

import { Link } from "react-router-dom";

const Health = () => {
  return (
    <div className='health'>
        <h1 className='header'>HEALTH</h1>
        <div className='oops'>
      <div class="card3">
        <img src={Image4} alt="Card Image" class="card-image"/>
        <div className="text">
         <p className='card-description'>Maintaining a balanced diet, regular exercise, and adequate sleep are essential for achieving optimal physical health and well-being. </p>
         <Link to="/health">
         <button>Read more</button>
         </Link>
        </div>
      </div>
      <div class="card3">
        <img src={Image4} alt="Card Image" class="card-image"/>
        <div className="text">
        <p class="card-description">Mental health is just as important as physical health, encompassing emotional stability, stress management, and a positive mindset.</p>
        <Link to="/health">
         <button>Read more</button>
         </Link>
        </div>
      </div>

      
      </div>
    </div>
  )
}

export default Health



