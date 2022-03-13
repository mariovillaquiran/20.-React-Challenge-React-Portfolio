import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MARIO VILLAQUIRAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../Homepage">HOME</Nav.Link>
            <Nav.Link href="../Portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="../Resume">RESUME</Nav.Link>
            <Nav.Link href="../Contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
