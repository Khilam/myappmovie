import MyNavbar from '/home/mouna/Bureau/mymovieapp/src/components/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Movies from '/home/mouna/Bureau/mymovieapp/src/components/Movies.js';
import Partie from '/home/mouna/Bureau/mymovieapp/src/components/partie.js';
import {Row} from 'react-bootstrap';

import React from 'react'


function Home() {
    return (
        <div>
   
     <MyNavbar/>
   
    
     
     
     
      <Partie/>
      <h1 className="collection" ><strong>Our Collection</strong></h1>
        <Row className='d-flex justify-content-around mt-6'>
        
        <Movies/>
        </Row>
      
      
      </div>
    )
}

export default Home

