import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import github_logo from '../../assets/images/github-icon.png';
import application_logo from '../../assets/images/application.png';

import "../../assets/styles/Projects.css";

// Importing all application images
import vEather from "../../assets/projects/vEatherForecasting2.png";
import munchmonitor from "../../assets/projects/mmlogo1.png";
import narrativenest from "../../assets/projects/VSNarrativeNest.png";
import taskManager from "../../assets/projects/taskManager.png";
import notesKeeper from "../../assets/projects/notesKeeper.png";
import quizlathon from "../../assets/projects/quizlathon.png";

function Projects() {
     return (
          <section className='projects'>
               <div>
                    <h3>Projects</h3>
                    <div>
                         <Row>
                              <Col xs={4}>
                                   <Image src={munchmonitor} thumbnail className='imgProject' />
                                   <aside>
                                        <p>
                                             <a href="https://github.com/Vigneshwarie/munchMonitor"><img src={github_logo} /></a>
                                             <a href="https://munchmonitor-641029a8a248.herokuapp.com/"><img src={application_logo} /></a>
                                        </p>
                                   </aside>
                              </Col>
                              <Col xs={4}>
                                   <Image src={narrativenest} thumbnail className='imgProject' />
                                   <aside>
                                        <p>
                                             <a href="https://github.com/Vigneshwarie/VSNarrativeNest"><img src={github_logo} /></a>
                                             <a href="https://vs-narrative-nest-75a09defd366.herokuapp.com/"><img src={application_logo} /></a>
                                        </p>
                                   </aside>
                              </Col>
                              <Col xs={4}>
                                   <Image src={vEather} thumbnail className='imgProject' />
                                   <aside>
                                        <p>
                                             <a href="https://github.com/Vigneshwarie/vEatherForecasting"><img src={github_logo} /></a>
                                             <a href="https://vigneshwarie.github.io/vEatherForecasting/"><img src={application_logo} /></a>
                                        </p>
                                   </aside>
                              </Col>
                         </Row>
                         <Row>
                              <Col xs={4}>
                                   <Image src={taskManager} thumbnail className='imgProject'/>
                                   <aside>
                                        <p>
                                             <a href="https://github.com/Vigneshwarie/G6-Task-Manager"><img src={github_logo} /></a>
                                             <a href="https://vigneshwarie.github.io/G6-Task-Manager/"><img src={application_logo} /></a>
                                        </p>
                                   </aside>
                              </Col>
                              <Col xs={4}>
                                   <Image src={notesKeeper} thumbnail className='imgProject'/>
                                   <aside>
                                        <p>
                                             <a href="https://github.com/Vigneshwarie/VS-Notes-Keeper"><img src={github_logo} /></a>
                                             <a href="https://vs-notes-keeper-b09b3efbcb78.herokuapp.com/"><img src={application_logo} /></a>
                                        </p>
                                   </aside>
                              </Col>
                              <Col xs={4}>
                                   <Image src={quizlathon} thumbnail className='imgProject'/>
                                   <aside>
                                        <p>
                                             <a href="https://github.com/Vigneshwarie/JS-Quizlathon"><img src={github_logo} /></a>
                                             <a href="https://vigneshwarie.github.io/JS-Quizlathon/"><img src={application_logo} /></a>
                                        </p>
                                   </aside>
                              </Col>
                         </Row>
                    </div>                   
               </div>
          </section>
     );
}

export default Projects;