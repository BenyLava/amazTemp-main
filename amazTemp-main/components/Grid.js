import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cardcustom from '../components/Card';




function Grid() {
  return (
    <Container>
      <Row>
        <Col><Cardcustom img="" title="" text=""/></Col>
        <Col><Cardcustom/></Col>
        <Col><Cardcustom/></Col>
        <Col><Cardcustom/></Col>
      </Row>
      <Row>
        <Col><Cardcustom/></Col>
        <Col><Cardcustom/></Col>
        <Col><Cardcustom/></Col>
        <Col><Cardcustom/></Col>
      </Row>
    </Container>
  );
}

export default Grid;