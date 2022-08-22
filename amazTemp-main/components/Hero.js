import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Hero = () => {
  return (
    <section className="section position-relative m-3 mt-5">
      <Container className="">
        <Row className=" align-items-center">
          <div className=" pr-lg-5">
            <h1 className="text-dark font-weight-bold f-24 pb-5 mb-4 text-center">Hi, I'm Ben</h1>
            <br/>
            <h1 className="mb-4 text-dark font-weight-normal line-height-1_4 text-center">A full-stack web developer</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            

            <div className="text-center d-flex justify-content-center">
             <a href="/Resume0.pdf" target="_blank" className="btn text-dark text-center font-weight-bold d-flex justify-content-center align-items-center ">
              View my resume   <span className="ml-2 right-icon">  &#8594;</span>
             </a>
             </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;