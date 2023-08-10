import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import line2 from '../img/line2.jpg';
import avatar from '../img/avatar.jpg';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../aboutus.css";
// import serviceline from '../img/serviceline.jpg';





const aboutuscolor: React.CSSProperties = { 
    background: '#717D7E',
};

const textStyle: React.CSSProperties = {
  textAlign: 'center',
  color:'black'
};

const textcolor : React.CSSProperties = {
 color:'white',
 
 };

const AboutUs = () => {
  return (

<>

<div style={aboutuscolor} >
<div>
  <br></br>
  <br></br>
  <h3 style={textStyle}>What people said about us </h3>
  </div>



<br></br>
<br></br>


<br></br>
<br></br>

<Carousel>
 <Carousel.Item style={textStyle}>
 <Image src= {avatar} rounded />
 <br></br>
 <br></br>
 <div>

  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At exercitationem quisquam repellendus 
    iste repellat architecto iusto suscipit aliquid nam esse!</h3>
  
    </div>
    </Carousel.Item>
    

<Carousel.Item style={textStyle}>
<Image src= {avatar} rounded />
<br></br>
<br></br>
<div>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At exercitationem quisquam repellendus 
    iste repellat architecto iusto suscipit aliquid nam esse!</h3>

      </div>
      </Carousel.Item>


<Carousel.Item style={textStyle}>
<Image src= {avatar} rounded />
<br></br>
<br></br>
<div>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    At exercitationem quisquam repellendus 
    iste repellat architecto iusto suscipit aliquid nam esse!</h3>

      </div>
</Carousel.Item>
</Carousel>





</div>


</>


  )
} 

    
    
    

    
  

export default AboutUs;