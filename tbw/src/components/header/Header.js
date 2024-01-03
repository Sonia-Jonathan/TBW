import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

function Header(props) {
  return (
    <Navbar expand="lg"  className="header">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="col-lg-6 justify-content-center m-auto">
          <Navbar.Brand href="/" className=" text-white">TBW</Navbar.Brand>
            <Nav.Link className="text-white" href="/vision" >Vision</Nav.Link>
            <Nav.Link className="text-white" href="/sound">Sound</Nav.Link>
            <Nav.Link className="text-white" href="/talents">Talents</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
