import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

function Header({ color }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className={`header ${color ? 'header-bg' : ''}`}>
      <Container>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="custom-toggler" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse 
          id="basic-navbar-nav" 
          className={`custom-collapse ${expanded ? 'show' : ''}`} 
        >
          <Nav className="navbar col-lg-6 justify-content-lg-center m-lg-auto">
            <Navbar.Brand href="/" className="neon-text-navbar text-white">TBW</Navbar.Brand>
            <Nav.Link className="neon-text-navbar text-white" href="/vision">Vision</Nav.Link>
            <Nav.Link className="neon-text-navbar text-white" href="/music">Music</Nav.Link>
            <Nav.Link className="neon-text-navbar text-white" href="/talents">Talents</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
