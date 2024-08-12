import React from 'react';
import { Link } from "react-router-dom";



import Image1 from "./images/tech-4.jpg";
import Image2 from "./images/tech-2.jpg";
import Image3 from "./images/tech-3.jpg";

const tech = () => {
  return (
    <div className='tech'>
    <h1 className='header'>TECHNOLOGY</h1>
    <div className='oops'>
  <div class="card4">
    <img src={Image3} alt="Card Image" class="card-image"/>
    <div className="text">
    <p class="card-description">Artificial Intelligence is transforming industries by automating tasks, enhancing decision-making, and creating new opportunities for innovation.</p>
    <Link to="/tech">
    <button>Read more</button>
    </Link>
    </div>
  </div>
  <div class="card4">
    <img src={Image2} alt="Card Image" class="card-image"/>
    <div className="text">
    <p class="card-description">The rise of 5G technology promises faster internet speeds, improved connectivity, and the potential to revolutionize communication and smart devices.</p>
    <Link to="/tech">
    <button>Read more</button>
    </Link>
    </div>
  </div>
  </div>
</div>
  )
}

export default tech