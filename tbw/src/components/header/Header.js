import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import { useState } from "react";

function Header(props) {

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY>=30){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);


  return (
    <Navbar expand="lg"  className={`header ${color ? 'header-bg':''}`}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-lg-6 justify-content-center m-auto">
          <Navbar.Brand href="/" className="neon-text-navbar text-white">TBW</Navbar.Brand>
            <Nav.Link className="neon-text-navbar text-white" href="/store" >Store</Nav.Link>
            <Nav.Link className="neon-text-navbar text-white" href="/vision" >Vision</Nav.Link>
            <Nav.Link className="neon-text-navbar text-white" href="/music">Music</Nav.Link>
            <Nav.Link className="neon-text-navbar text-white" href="/talents">Talents</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
