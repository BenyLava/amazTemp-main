import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
  
  
  
  
  return (
    <div>
    <Navbar className="mb-5 padding-0 bg-green navbar-dark d-flex align-items-start " collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="d-inline-block vertical-align-top padding-0 margin-0" href="/#home"><img src="/images/kitchenLogoOffblack.png" width='50px' height='40px' className='padding-0 d-inline-block align top mr-5'/>{' '}</Navbar.Brand>
        <Navbar.Toggle classname="navbar-dark" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className= "navbar-dark" id="basic-navbar-nav">
          <Nav className="ms-auto navbar-dark">
            
            <Nav.Link className="ms-auto text-light" href="/products">Catalog</Nav.Link>
            <Nav.Link className="ms-auto text-light" href="/#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;