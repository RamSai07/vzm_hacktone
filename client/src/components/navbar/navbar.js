// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css'
export const NavBar=()=> {
  return (
  <>
    {['sm'].map((expand) => (
      <Navbar key={expand} expand={expand} className=" mb-3 navbar">
        <Container fluid >
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="client\src\components\images\mainlogo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Project Uploder
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="navbaroffcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Project Uploder
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Login</Nav.Link>
                <Nav.Link href="#action2">Register</Nav.Link>
                <NavDropdown
                  title="Projects"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">College</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    University
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action5">
                    Others
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    </>
  );
}

