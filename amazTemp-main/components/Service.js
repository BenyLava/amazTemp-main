import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = () => {
  const services = [
    { title : "New Home Design & Build", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Complete Home Renovations", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "complete home renovations", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Web Scraping", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Web Hosting and Maintenance", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Security, Performance, and User-Experience Audits", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "New Home Design & Build", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Complete Home Renovations", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "complete home renovations", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Web Scraping", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Web Hosting and Maintenance", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." },
    { title : "Security, Performance, and User-Experience Audits", desc : "Complete design-build services with expert project management backed by new home warranties and dependable, local support." }
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mt-5 mb-5">
              <h3 className="font-weight-medium text-dark"><span className="text-violet"></span></h3><br/>
              <p className="text-dark"></p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col className=" d-flex justify-content-center text-align-center" key={key}  lg={3} md={6}>
                <Card className="cardcust mb-3 mt-3 d-flex" style={{ width: '18rem' }}>
                   <Card.Img className="border img-radius" variant="top" src="/images/letterb.jpg" />
                  <Card.Body className="card-btm">
                    <Card.Title className=" text-align-center justify-content-center d-flex card-top">{service.title}</Card.Title>
                    <Card.Text className="m-3 d-flex flex-wrap">
                       {service.desc}
                    </Card.Text>
                    <Button className=" flex-column d-flex justify-content-center text-align-center card-btm" variant="primary">View on Amazon</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;