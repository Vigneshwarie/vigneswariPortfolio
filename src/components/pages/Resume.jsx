import resume from "../../assets/resume/VSambandam - Tech Lead US.pdf";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "../../assets/styles/Resume.css";
import profile from "../../assets/images/profileResume.png";

function Resume() {
      return (
          <section className="resume">
               <div>
                    <h3>Resume</h3>
                    <div>
                         <Row>
                              <Col xs={1}>
                                   <Image src={profile} thumbnail />
                              </Col>
                               <Col xs={11}>         
                                   <p>
                                         <a className="nav-link" href={resume} download="VSambandam - Tech Lead">Download Resume</a>      
                                   </p>
                              </Col>
                         </Row>
                    </div>  
               </div>
          </section>
     );
}

export default Resume;