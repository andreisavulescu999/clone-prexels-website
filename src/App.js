import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import Card from './components/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
                      <Row>
                          <Navbar />
                      </Row>
                      <br></br>
                      <Container>
                        <Row>
                          <Col>
                          <Image src="https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=600" fluid />
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col md={12}>
                              <ButtonGroup aria-label="Basic example">
                                    <Button variant="outline-dark" size="lg" link="/home">Pornire</Button> 
                                    <Button variant="outline-dark" size="lg">Videoclipuri</Button>
                                    <Button variant="outline-dark" size="lg">Clasament</Button>
                                    <Button variant="outline-dark" size="lg">Provocari</Button>
                              </ButtonGroup>
                            </Col> 
                        </Row> 
                        <br></br>
                      </Container>
                      <Container>
                        <Row>
                          <h3 class="text-left pb-5">Imagini de stoc gratuite</h3>
                        </Row>
                        <Row md={12}>
                            <Col sm={3} md={4}><Card src='https://www.idevice.ro/wp-content/uploads/2020/01/luna-imagini.jpg'/></Col>
                            <Col sm={3} md={4}><Card src='https://images.stockfreeimages.com/13951/sfixl/139516300.jpg'/></Col>
                            <Col sm={3} md={4}><Card src="https://images.stockfreeimages.com/13951/sfixl/139516300.jpg" /></Col>
                        </Row>
                        <br></br>
                        <Row md={12}>
                            <Col sm={3} md={4}><Card src='https://images.stockfreeimages.com/11518/sfixl/115183220.jpg'/></Col>
                            <Col sm={3} md={4}><Card src='https://images.stockfreeimages.com/11518/sfixl/115183220.jpg'/></Col>
                            <Col sm={3} md={4}><Card src='https://images.stockfreeimages.com/11518/sfixl/115183220.jpg'/></Col>
                        </Row>
                      </Container>
    </div>
  );
}

export default App;
