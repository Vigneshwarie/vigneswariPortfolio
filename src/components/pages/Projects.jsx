import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../../assets/styles/Projects.css";

function Projects() {
     return (
          <section className='projects'>
               <div>
                    <h3>Projects</h3>
                    <div className='container'>
                         <Container>
                              <Row>
                                   <Col>
                                        <Card className='cardContainer'>
                                             <Card.Img variant="top" src="holder.js/100px180" />
                                             <Card.Body>
                                                  <Card.Title>Project 1</Card.Title>
                                                  <Button variant="primary">Go somewhere</Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                                   <Col>
                                         <Card className='cardContainer'>
                                             <Card.Img variant="top" src="holder.js/100px180" />
                                             <Card.Body>
                                                  <Card.Title>Project 2</Card.Title>
                                                  <Button variant="primary">Go somewhere</Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                                   <Col>
                                         <Card className='cardContainer'>
                                             <Card.Img variant="top" src="holder.js/100px180" />
                                             <Card.Body>
                                                  <Card.Title>Project 3</Card.Title>
                                                  <Button variant="primary">Go somewhere</Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              </Row>
                              <Row>
                                   <Col>
                                        <Card className='cardContainer'>
                                             <Card.Img variant="top" src="holder.js/100px180" />
                                             <Card.Body>
                                                  <Card.Title>Project 4</Card.Title>
                                                  <Button variant="primary">Go somewhere</Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                                   <Col>
                                         <Card className='cardContainer'>
                                             <Card.Img variant="top" src="holder.js/100px180" />
                                             <Card.Body>
                                                  <Card.Title>Project 5</Card.Title>
                                                  <Button variant="primary">Go somewhere</Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                                   <Col>
                                         <Card className='cardContainer'>
                                             <Card.Img variant="top" src="holder.js/100px180" />
                                             <Card.Body>
                                                  <Card.Title>Project 6</Card.Title>
                                                  <Button variant="primary">Go somewhere</Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>
                              </Row>
                         </Container>                   
                    </div>
               </div>
          </section>
     );
}

export default Projects;