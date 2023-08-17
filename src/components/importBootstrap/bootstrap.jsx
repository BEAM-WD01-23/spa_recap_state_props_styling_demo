import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CarImage from '../../assets/images/cars.jpg';

function BasicExample() {
  return (
    <div>
    <h2>IV. Import and use Bootstrap ...</h2>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={CarImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
   
  );
}

export default BasicExample;