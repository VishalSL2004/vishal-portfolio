import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar({ onExperienceClick }) {
  return (
    <Navbar expand="lg" fixed="top" className="navbar navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-white">
          Vishal.dev
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

            {/* EXPERIENCE MODAL TRIGGER */}
            <Nav.Link onClick={onExperienceClick}>
              Experience
            </Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
