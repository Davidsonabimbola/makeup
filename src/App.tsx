import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer/Footer';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import { Container } from 'react-bootstrap';
// import Home from './components/Home';

function App() {
  return (

    // <React.Fragment>
    //     <Router>
    //         <main>
    //         <Container>
             
    //          <Routes>
                 
    //              <Route path="Home" element={<Home/>} />
                 
    //        </Routes>
           
    //         </Container>
    //         </main>
    //      </Router>
       
    //  </React.Fragment>





    <div>
      <Header/>
       <AboutUs/> 
       <Footer/>
    </div>
  );
}

export default App;
