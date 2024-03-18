import "../../assets/styles/Education.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education() {
     return (
          <section className="education">
               <div>
                    <h3>Education</h3>
                    <Row>
                         <Col xs={12}>
                              <ul>
                                   <li><b>UC Berkeley </b>Certified MERN Full Stack Developer</li>
                                   <li><b>AWS Certified Cloud Practitioner</b></li>
                                   <li><b>Master of Science,</b> Information Technology, University of the Cumberlands, U.S. 2022 - 2024 (pursuing)</li>
                                   <li><b>Bachelor of Engineering,</b> Computer Science, Anna University, India. 2002 - 2006.</li>
                                   <li>OutSystems Associate Reactive Developer O11 – Certificate ID # 0000000097059828</li>
                                   <li>Certified IT Service Management Foundation™ - Certificate ID # - 19344</li>
                                   <li>ITIL® Foundation Certificate in IT Service Management - Certification # GR671139701VS</li>
                              </ul>
                         </Col>
        
                    </Row>
               </div>
          </section>
     );
}

export default Education;