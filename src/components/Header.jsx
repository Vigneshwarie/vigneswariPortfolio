import '../assets/styles/Header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
     return (
          <Row>
               <Col xs={12}>
                    <header className="header">
                         <h1>Vigneswari Sambandam</h1>
                    </header>
               </Col>
          </Row>
     );
}

export default Header;