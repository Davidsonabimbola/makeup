import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Facebook, Instagram, Linkedin, TextCenter, Twitter,Youtube} from 'react-bootstrap-icons';



const footercolor: React.CSSProperties = { 
  background: '#A76666',
  textAlign: 'center',
  color: 'white'
};


const textStyle: React.CSSProperties = {
  textAlign: 'center',
  color:'black'
  };

  const newColor: React.CSSProperties = {
    textAlign: 'center',
    color:'white'
    };
  
    const buttonColor: React.CSSProperties = {
      color:'white',
      textAlign: 'center'
      
      };

  

  


 

const Footer = () => {
  return (
    <>
    
<div style ={footercolor}>
<br></br>
<br></br>
<br></br>
    
  <div>
<div style = {newColor} color='white'>
<Button variant="" style= {buttonColor}>Home</Button>
<Button variant=" " style= {buttonColor}>features</Button>
<Button variant=" " style= {buttonColor}>pricing</Button>
<Button variant=" " style= {buttonColor}>contact</Button>

</div>


</div>


</div>

<div style={footercolor}>
        <a href='https://www.facebook.com/profile.php?id=100091606221617&is_tour_dismissed=true' className="mx-3" style={{color: "#FFFFFF", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Facebook className="footer-link" /> </a>
        <a  href="https://www.linkedin.com/company/doyenify/" className="mx-3" style={{color: "#FFFFFF", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Linkedin className="footer-link" /> </a>
        <a  href="https://twitter.com/DOYENIFY?t=iIP1-2SvQTGkMvpng9Fddw&s=09"className="mx-3" style={{color: "#FFFFFF", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Twitter className="footer-link" /> </a>
        <a href="https://www.instagram.com/doyenify/?igshid=ZDdkNTZiNTM%3D" className="mx-3" style={{color: "#FFFFFF", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><Instagram className="footer-link" /> </a>
        <a href={window.location.href} className="mx-3" style={{color: "#FFFFFF", fontSize: "25px", textDecoration: "none"}} target="_blank" rel="noopener noreferrer" ><Youtube className="footer-link" /> </a>
        </div>
       




</>
  )
}

export default Footer