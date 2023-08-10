import React from 'react'
  import 'bootstrap/dist/css/bootstrap.min.css';

  import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../header.css";
import Card from 'react-bootstrap/Card';
import hero from '../../img/hero.jpg';
import Button from 'react-bootstrap/Button';
import  {Row, Col } from 'react-bootstrap';
import serviceline from '../../img/serviceline.jpg';
import {TelephoneFill} from 'react-bootstrap-icons';
import pic2 from '../../img/pic2.jpg';
import pic3 from '../../img/pic3.jpg';
import pic4 from '../../img/pic4.jpg';
import pic5 from '../../img/pic5.jpg';


const logoRight: React.CSSProperties = {
  position: 'absolute',
  right:0,
fontWeight: 'bold',
width: '100px'
};

const logoLeft: React.CSSProperties = {
  position: 'absolute',
  left:0,
fontWeight: 'bold',
width: '100px'
};



const textStyle: React.CSSProperties = {
    textAlign: 'center',
};

const ColoredText: React.CSSProperties= {
    color: '#A76666',
}

const RadiusBorder: React.CSSProperties= {
    borderRadius: '40px',
    textAlign: 'center',
}


  
const Header = () => {
  return (
    <>
    
      <Navbar  className = "abimbola" 
    //    style={{backgroundColor:'#A76666'}}
       data-bs-theme="dark">
        <Container>
          <div style={logoLeft}>
            <Row>
          <Navbar.Brand href="#home">Glamourify</Navbar.Brand>
          </Row>
          
          </div>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <br></br>
            <br></br>
           
            <div><Button style ={logoRight}variant="warning" size="sm" >Contact</Button>{' '} </div>
            <br></br>
            <br></br>
            <br></br>
            
            <div> 
              
{/* Telephone and cart icons */}

              {/* <svg  
              
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" 
            viewBox="0 0 16 16">
  <path fill-rule="evenodd" 
  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
</div>

<div>
<svg 
xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" 
viewBox="0 0 16 16">
  <path 
  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg> */}
</div>


          </Nav>
        </Container>
      </Navbar>

      {/* hero section. */}
      {/* hero section */}
      
      <Card className="bg-dark text-white">
      {/* <Card.Img src={{hero}} alt="Card image" /> */}
      <img src={hero} alt="Card image" />
      <Card.ImgOverlay>  
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<div style={textStyle}>
        <Card.Text>
             <h2>
            <h2>Giving you the <h2 style={ColoredText}>professional touch
            </h2>
                </h2>of beauty and glamour</h2> 

                
            
                
                

                
          </Card.Text >
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
{/* book an appointment button */}
          <Button style={RadiusBorder} variant="warning" size="lg"  >Book an appointment</Button>{' '}
          </div>
          
      </Card.ImgOverlay>
    </Card>
      
    <br></br>
    <br></br>
    <div style = {textStyle}>
        {/* <h2 style={textStyle}> our beauty services </h2> */}

        <div><img src={serviceline} alt="Card image" /></div>

        <span> Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Nobis, modi.</span>

            <br></br>
            <br></br>
            <br></br>

            {/* the picture frames */}
            <Container>
      <Row>
        <Col xs={2} md={3}>
        <img src={pic2} />
        </Col>
        <Col xs={2} md={3}>
          <img src= {pic3} />
          </Col>

          <Col xs={2} md={3}>
          <img src= {pic4} /> 

        </Col>

        <Col xs={2} md={3}>
          <img src= {pic5} /> 
          </Col>

{/* new image row and col */}
          {/* <Container>
      <Row>
        <Col xs={6} md={4}>
          <img src= {{pic2}} rounded />
        </Col>
        <Col xs={6} md={4}>
          <image src= {{pic3}} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <image src= {{pic4}}thumbnail />
        </Col>
      </Row>
    </Container>
  ); */}
      
      </Row>
    </Container>


    

        
         
    </div>

<br></br>
<br></br>
<br></br>
<br></br>
    {/* new card image */}
    
    


      
    

    
    
    
    </>
  )
}

export default Header