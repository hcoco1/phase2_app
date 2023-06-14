import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from './components/NavigationBar';
import CardsContainer from './CardsContainer';
import './index.css';


import Footer from './components/Footer';




function App() {

  return (

    <Container fluid>
      <Row>
        <Col>

        <div className="container fluid">
          <NavigationBar />
          <CardsContainer />
          <Footer />
        </div>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
