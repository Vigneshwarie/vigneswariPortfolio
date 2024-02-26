import React from "react";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import "../../assets/styles/About.css";
import munchmonitor from "../../assets/projects/mmlogo1.png";

function About() {
     return (
          <section className="about">
               <div>
                    <h3>About Me</h3>
                    <div>
                         <Row>
                              <Col xs={4}>
                                   <Image src={munchmonitor} thumbnail className='imgAboutMe' />
                              </Col>
                              <Col className="aboutme" xs={8}>
                                   This is Vigneswari Sambandam aka Viggy. I am currently doing my masters in Information Technology. I'm an accomplished IT professional with 14 years of experience developing and architecting IT applications across industries with a proven track record of delivering value to Healthcare, Telecom, and Service Industries businesses. I wanted to upskill myself and embrace the changes and happenings in recent years in IT. So, I took a break and came to the US for a master's, and now I'm also doing the Berkeley Coding Bootcamp for additional skills. Apart from work and studies, I love watching movies, listening to music, and sometimes reading books. I empathize with people and hate all kinds of discrimination against people in all forms.
                              </Col>
                         </Row>
                    </div>  
               </div>
          </section>
     );
}

export default About;