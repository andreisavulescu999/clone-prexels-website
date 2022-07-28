import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './Logo';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function NavbarEx() {
    return (
        <Navbar fixed="top" bg="light" expand="lg" >
          <Container>
            <Navbar.Brand href="#home"><Logo/> Pexels</Navbar.Brand>
                <Form.Group  controlId="formBasicSearch">
                    <Form.Control type="text"  placeholder="Cauta fotografiile gratuite...." />
                    <Form.Text className="text-muted">
                    <i class="bi bi-search"></i>
                    </Form.Text>
                </Form.Group>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
                <NavDropdown title="Descopera" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Descopera Fotografii</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Cautari populare
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Clasament</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Provocari
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Videoclipuri Gratuite
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Blogul Pixels
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Licenta</Nav.Link>
                <Nav.Link href="#link">Incarca</Nav.Link>    
                <NavDropdown title="..." id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Descopera Fotografii</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Cautari populare
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Clasament</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Provocari
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Videoclipuri Gratuite
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Blogul Pixels
                  </NavDropdown.Item>
                </NavDropdown> 
                <Button variant="outline-success" size="lg" link="/home">Join us</Button> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }


export default NavbarEx;