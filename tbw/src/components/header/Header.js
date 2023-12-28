import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Header.css";

function Header(props) {
  return (
    <Navbar expand="lg"  className="br ">
      <Container className="br">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="br" id="basic-navbar-nav">
          <Nav className="br  col-lg-6 justify-content-center m-auto">
          <Navbar.Brand href="/">TBW</Navbar.Brand>
            <Nav.Link href="/vision" >Vision</Nav.Link>
            <Nav.Link href="/sound">Sound</Nav.Link>
            <Nav.Link href="/talents">Talents</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
