import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

import logo from '../../asset/logos/Gri-logo-5.png';

function Header(props) {
  const [expanded, setExpanded] = useState(false);
  const [color, setColor] = useState(false);
  
  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

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
          className="custom-collapse"
        >
          <Nav className="navbar col-6 col-lg-5 justify-content-lg-center m-lg-auto">
            <Nav.Link className="col-12 col-lg-2 neon-text-navbar text-white text-lg-center" href="/"><img className='col-2 col-lg-6' src={logo} /></Nav.Link>
            <Nav.Link className="col-12 col-lg-2 neon-text-navbar text-white text-lg-center" href="/vision">Vision</Nav.Link>
            <Nav.Link className="col-12 col-lg-2 neon-text-navbar text-white text-lg-center" href="/music">Music</Nav.Link>
            <Nav.Link className="col-12 col-lg-2 neon-text-navbar text-white text-lg-center" href="/talents">Talents</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
