import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Test() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to='/' >Home</Link>
      <Link to='/about2'>About</Link>
      <Link to='/contact2'>Contact</Link>
    </Nav>
    
  </Navbar>
        </div>
    )
}

export default Test
