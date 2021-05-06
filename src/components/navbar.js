import React from 'react';
import {Navbar, Nav, Button, Form, FormControl, NavDropdown, NavbarImg} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MyNavbar() {
    return (
        <div className="back-img">
        <Navbar className="navbar">
    <img className="myLogo" src="https://api.freelogodesign.org/files/c52ba3429513446ca2564c4dbd89649a/thumb/logo_764x400.png?9332"/>
    
    <Nav className="mr-auto">
      <Nav.Link className="black" href="#home">Home</Nav.Link>
      <Nav.Link className="black"  href="#home">Sign Up</Nav.Link>
      <Nav.Link className="black" href="#pricing">Sing In</Nav.Link>
      <Link className="black" to="/Favoris">Favourite</Link>
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Romance</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Biography</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Scince Fiction</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Popular</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <div >
 <input  className=" mr-sm-2 recherche" type="text" placeholder="Search" aria-label="Search" />
 </div>
 </Navbar>
       
  
  <h1 className="ktiba">Home Theater, brings Cinema to you</h1>
  </div>

    )
}

export default MyNavbar
