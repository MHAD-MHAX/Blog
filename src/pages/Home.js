import React from 'react'

import Navbar from "../Navbar";
import Health from "../Health";
import Auto from "../Auto";
import Tech from "../tech";

import Image1 from "../images/health-2.jpg";
import Image2 from "../images/img-auto3.jpg";
import Image3 from "../images/tech-2.jpg";



const Home = () => {
  return (
    <div className="App">
    <Navbar/>
    <div className="container">
     <div class="card">
       <img src={Image1} alt="Card Image" class="card-image"/>
       <div className="text">
       <h2 class="card-title">HEALTH</h2>
       <h3 className="card-description">The Pillars of Health: Building a Balanced and Vibrant Life</h3>
       <p class="card-description">Health is often described as a state of complete physical, mental, and social well-being.</p>
    
       </div>
     </div>
     <div class="Mini">
     <div class="card2">
       <img src={Image2} alt="Card Image" class="card-image2"/>
       <div className="text">
       <h2 class="card-title">AUTOMOBILES</h2>
       <h3 className="card-description">The Early Days: From Steam Engines to Gasoline Power</h3>
       
       </div>
     </div>
     <div class="card2">
       <img src={Image3} alt="Card Image" class="card-image2"/>
       <div className="text">
       <h2 class="card-title">TECHNOLOGY</h2>
       <h3 className="card-description">The Internet of Things (IoT)</h3>
       </div>
     </div>
     </div>
   </div>

   <Health/>
   <Auto/>
   <Tech/>
   </div>
  )
}

export default Home