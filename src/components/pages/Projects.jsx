import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import github_logo from '../../assets/images/github-icon.png';
import application_logo from '../../assets/images/application.png';

import "../../assets/styles/Projects.css";

// Importing all application images
import vEather from "../../assets/projects/vEatherForecasting.png";
import munchmonitor from "../../assets/projects/mmlogo1.png";

function Projects() {
     return (
          <section className='projects'>
               <div>
                    <h3>Projects</h3>
                    <div className='container'>
                         <Container>
                              <Row>
                                   <Col>
                                        <Image src={munchmonitor} thumbnail className='imgProject' />
                                        <aside>
                                             <p>
                                                  <a href="https://github.com/Vigneshwarie/munchMonitor"><img src={github_logo} /></a>
                                                  <a href="https://munchmonitor-641029a8a248.herokuapp.com/"><img src={application_logo} /></a>
                                             </p>
                                        </aside>
                                   </Col>
                                   <Col>
                                         <Image src={vEather} thumbnail className='imgProject' />
                                        <aside>
                                             <p>
                                                  <a href="https://github.com/Vigneshwarie/vEatherForecasting"><img src={github_logo} /></a>
                                                  <a href="https://vigneshwarie.github.io/vEatherForecasting/"><img src={application_logo} /></a>
                                             </p>
                                        </aside>
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