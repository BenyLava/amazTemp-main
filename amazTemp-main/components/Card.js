import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import { Container, Row, Col } from "reactstrap";




function Cardcustom(img, title, text) {
  return (
    <Card className="mb-3 mt-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/letterb.jpg" />
      <Card.Body>
        <Card.Title className="text-align-center d-flex justify-content-center">title</Card.Title>
        <Card.Text>
          text
        </Card.Text>
        <Button className="d-flex justify-content-center text-align-center" variant="primary">View on Amazon</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcustom;