import "../../assets/styles/Contact.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Contact() {
     return (
          <section className="contact">
               <div>
                    <h3>Contact Me</h3>
                    <div>
                         <p>Hello, and thank you for visiting my portfolio! I'm actively seeking opportunities in Staff Software Engineer roles, and I'm excited about the possibility of joining a dynamic team where I can contribute my expertise and passion for software development.</p>
                         <p>Whether you're a hiring manager, recruiter, or fellow developer interested in discussing potential collaborations or job opportunities, I'd love to hear from you. Feel free to contact me using the contact form below or via email <a href="mailto:vigneswari.sambandam@gmail.com"><b>here</b></a>. I prioritize responding promptly to all inquiries, so you can expect to hear back from me soon.
                         </p>
                         <p>Thank you for considering me for your team. I'm eager to discuss how my skills and experience align with your organization's needs and how I can help drive its success.</p>
                         <p>I am looking forward to connecting with you!</p>
                    </div>
               </div>
               <section>
                    <div>
                         <Form className="frm">
                              <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                                   <Form.Label column sm={1} className="lbl">
                                        Name
                                   </Form.Label>
                                   <Col sm={4}>
                                        <Form.Control type="text" placeholder="Your Name" />
                                   </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                   <Form.Label column sm={1} className="lbl">
                                        Email
                                   </Form.Label>
                                   <Col sm={4}>
                                        <Form.Control type="email" placeholder="Your Email" />
                                   </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
                                   <Form.Label column sm={1} className="lbl">
                                        Message
                                   </Form.Label>
                                   <Col sm={4}>
                                        <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                                   </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3">
                                   <Col sm={3}>
                                        <Button type="button" className="btn">Submit</Button>
                                   </Col>
                              </Form.Group>
                         </Form>
                    </div>
               </section>
          </section>
     );
}

export default Contact;