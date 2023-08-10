// import React, {useState} from 'react'
//   import 'bootstrap/dist/css/bootstrap.min.css';

//   import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import "../header.css";
// import Card from 'react-bootstrap/Card';
// import hero from '../../img/hero.jpg';
// import Button from 'react-bootstrap/Button';
// import  {Row, Col } from 'react-bootstrap';
// import serviceline from '../../img/serviceline.jpg';


// import pic2 from '../../img/pic2.jpg';
// import pic3 from '../../img/pic3.jpg';
// import pic4 from '../../img/pic4.jpg';
// import pic5 from '../../img/pic5.jpg';






// const logoLeft: React.CSSProperties = {
//   position: 'absolute',
//   left:0,
// fontWeight: 'bold',
// width: '100px',
// marginLeft: '10px'

// };



// const textStyle: React.CSSProperties = {
//     textAlign: 'center',
// };

// const ColoredText: React.CSSProperties= {
//     color: '#A76666',
// }

// const RadiusBorder: React.CSSProperties= {
//     borderRadius: '40px',
//     textAlign: 'center',
// }





  
// const Header = () => {

  
//   return (
//     <>
//     <div id = "Home">
//       <Navbar  className = "abimbola "
//     //    style={{backgroundColor:'#A76666'}}
//        data-bs-theme="dark">
//         <Container>
//           <div style={logoLeft}>
//             <Row>
//           <Navbar.Brand href="#home">Glamourify</Navbar.Brand>
//           </Row>
          
//           </div>
          
//           <Nav className="me-auto" style = {{marginLeft:"70px"}}>
//             <Nav.Link style = {{position:'absolute',right: 0, marginRight: '300px'}} href="#Home">Home</Nav.Link>
//             <Nav.Link style = {{position:'absolute',right: 0, marginRight: '200px'}}href="#AboutUs">About us</Nav.Link>
//             <Nav.Link style = {{position:'absolute',right: 12, marginRight: '100px'}}href="#pricing">Pricing</Nav.Link>
//             <Nav.Link href = "#Footer">
//             <div><Button style ={{marginRight: "20px", position:'absolute' , right:0, fontSmooth:"auto" }}
//             variant="warning" size="sm" >Contact</Button>{' '} </div>
//             </Nav.Link>
           
            
//             <br></br>
//             <br></br>
//             <br></br>
            
            


//           </Nav>
//         </Container>
//       </Navbar>


      
//       <Card className="bg-dark text-white">
//       {/* <Card.Img src={{hero}} alt="Card image" /> */}
//       <img src={hero} alt="hero" />
//       <Card.ImgOverlay>  
//       <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
// <div style={textStyle}>
//         <Card.Text>
//              <h2>
//             <h2>Giving you the <h2 style={ColoredText}>professional touch
//             </h2>
//                 </h2>of beauty and glamour</h2> 

                
            
                
                

                
//           </Card.Text >
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
//           <br></br>
// {/* book an appointment button */}
//           <Button style={RadiusBorder} variant="warning" size="lg"  >Book an appointment</Button>{' '}
//           </div>
          
//       </Card.ImgOverlay>
//     </Card>
      
//     <br></br>
//     <br></br>
//     <div style = {textStyle}>
//         {/* <h2 style={textStyle}> our beauty services </h2> */}

//         <div><img src={serviceline} alt="Service line" /></div>

//         <span> Lorem ipsum dolor sit amet, 
//             consectetur adipisicing elit. Nobis, modi.</span>

//             <br></br>
//             <br></br>
//             <br></br>

//             {/* the picture frames */}
//             <Container>
//       <Row>
//         <Col xs={2} md={3}>
//         <img src={pic2} alt = "pic2" />
//         <div className='nails  d-flex flex-column align-items-center justify-content-center' style={{width: "200px", height: "40px", backgroundColor:"#E06767", marginLeft:"52px", borderRadius: "8px", marginTop: "15px"}}>nails</div>
//         </Col>
//         <Col xs={2} md={3}>
//           <img src= {pic3} alt = "pic3" />
//           <div className='nails  d-flex flex-column align-items-center justify-content-center' style={{width: "200px", height: "40px", backgroundColor:"#E06767", marginLeft:"52px", borderRadius: "8px", marginTop: "15px"}}>hair</div>
//           </Col>

//           <Col xs={2} md={3}>
//           <img src= {pic4}  alt = "pic4"/> 
//           <div className='nails  d-flex flex-column align-items-center justify-content-center' style={{width: "200px", height: "40px", backgroundColor:"#E06767", marginLeft:"52px", borderRadius: "8px", marginTop: "15px"}}>eyebrow</div>

//         </Col>

//         <Col xs={2} md={3}>
//           <img src= {pic5} alt = "pic5" /> 
//           <div className='nails  d-flex flex-column align-items-center justify-content-center' style={{width: "200px", height: "40px", backgroundColor:"#E06767", marginLeft:"52px", borderRadius: "8px", marginTop: "15px"}}>eyelashes</div>
//           </Col>


      
//       </Row>
//     </Container>


    

        
         
//     </div>

// <br></br>
// <br></br>
// <br></br>
// <br></br>
   
    
    


      
    

    
    
//     </div>
//     </>
//   )
// }

// export default Header



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../header.css";
import Card from 'react-bootstrap/Card';
import hero from '../../img/hero.jpg';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import serviceline from '../../img/serviceline.jpg';
import pic2 from '../../img/pic2.jpg';
import pic3 from '../../img/pic3.jpg';
import pic4 from '../../img/pic4.jpg';
import pic5 from '../../img/pic5.jpg';

const logoLeft: React.CSSProperties = {
  position: 'absolute',
  left: 0,
  fontWeight: 'bold',
  width: '100px',
  marginLeft: '10px'
};

const textStyle: React.CSSProperties = {
  textAlign: 'center',
};

const ColoredText: React.CSSProperties = {
  color: '#A76666',
}

const RadiusBorder: React.CSSProperties = {
  borderRadius: '40px',
  textAlign: 'center',
}

const Header = () => {
  // State to manage the background color
  const [backgroundColor, setBackgroundColor] = useState('abimbola');

// function to change the background color randomly
  const handleHover = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
    // the getRandomColor is a function, so needs to equal to a constant which can then be used as an argument for setBackgroundColor.
    // if I prefer, I can change the randomColor from const to var. This will not affect the functionality of the code
    //However, in modern JS or TS it is generally recommended to use 'const' for variables that do not need to be re-assigned
  };

  // function to generate a random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <div id="Home"
        style={{ backgroundColor, minHeight: '100vh' }}
        onMouseOver={handleHover} // This event is triggered when the mouse hovers over the div
      >
        <Navbar className="abimbola" data-bs-theme="dark">
          <Container>
            <div style={logoLeft}>
              <Row>
                <Navbar.Brand href="#home">Glamourify</Navbar.Brand>
              </Row>
            </div>

            <Nav className="me-auto" style={{ marginLeft: "70px" }}>
              <Nav.Link style={{ position: 'absolute', right: 0, marginRight: '300px' }} href="#Home">Home</Nav.Link>
              <Nav.Link style={{ position: 'absolute', right: 0, marginRight: '200px' }} href="#AboutUs">About us</Nav.Link>
              <Nav.Link style={{ position: 'absolute', right: 12, marginRight: '100px' }} href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#Footer">
                <div><Button style={{ marginRight: "20px", position: 'absolute', right: 0, fontSmooth: "auto" }}
                  variant="warning" size="sm" >Contact</Button>{' '} </div>
              </Nav.Link>

              <br></br>
              <br></br>
              <br></br>

              
            </Nav>
          </Container>
        </Navbar>

        {/* hero section */}
        <Card className="bg-dark text-white">
          <img src={hero} alt="hero" />
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
        <div style={textStyle}>
          <div><img src={serviceline} alt="Service line" /></div>
          <span> Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Nobis, modi.</span>
          <br></br>
          <br></br>
          <br></br>
          <Container>
            <Row>
              <Col xs={2} md={3}>
                <img src={pic2} alt="pic2" />
                <div className='nails d-flex flex-column align-items-center justify-content-center' style={{ width: "200px", height: "40px", backgroundColor: "#E06767", marginLeft: "52px", borderRadius: "8px", marginTop: "15px" }}>nails</div>
              </Col>
              <Col xs={2} md={3}>
                <img src={pic3} alt="pic3" />
                <div className='nails d-flex flex-column align-items-center justify-content-center' style={{ width: "200px", height: "40px", backgroundColor: "#E06767", marginLeft: "52px", borderRadius: "8px", marginTop: "15px" }}>hair</div>
              </Col>

              <Col xs={2} md={3}>
                <img src={pic4} alt="pic4" />
                <div className='nails d-flex flex-column align-items-center justify-content-center' style={{ width: "200px", height: "40px", backgroundColor: "#E06767", marginLeft: "52px", borderRadius: "8px", marginTop: "15px" }}>eyebrow</div>
              </Col>

              <Col xs={2} md={3}>
                <img src={pic5} alt="pic5" />
                <div className='nails d-flex flex-column align-items-center justify-content-center' style={{ width: "200px", height: "40px", backgroundColor: "#E06767", marginLeft: "52px", borderRadius: "8px", marginTop: "15px" }}>eyelashes</div>
              </Col>
            </Row>
          </Container>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

export default Header;
