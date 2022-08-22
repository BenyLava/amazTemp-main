import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section mt-5" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5 pb-5 mt-5">
              <h3 className="font-weight-normal text-dark">About Me</h3>
              <br/>
              <p className="text-dark">What does a "full-stack web developer" do, you ask?  
               <br/>
               <br/>
               I can create a website from nothing into something. I can take your idea and using my knowledge of HTML, CSS, and JavaScript, create a fully finished product beyond your wildest imagination.
               <br/>
               <br/>
               I can plan, design, build, launch, and maintain a website myself...did I mention I build mobile apps too? I have worked on multiple published cross-platform iOS and Android apps with React Native.
               <br/>
               <br/>
               A full-stack developer knows no bounds. And when they find one they cross it without hesitation, boldly going into the unknown to return richer for it.


              </p>
            </div>
          </Col>
        </Row>
        <Row>
        <Col md={4}>
            <h2 className="font-weight-light text-center line-height-1_6 text-dark mb-4">Web dev with a little extra</h2>
          </Col>
         
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-normal text-center f-20 mb-3">My Skills</h6>
                <p className="text-dark text-center font-weight-light">HTML, CSS, JavaScript, Node.js, React, C#, .Net, SQL, Python, PHP <br/><br/> AWS, Azure, firebase, Wordpress, Photoshop, Illustrator, Unity, Jira, slack </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-normal text-center f-20 mb-3">My Vision</h6>
                <p className="text-dark text-center font-weight-light">Continuously improve my developer skiils to become the developer everyone is thankful to have on their team. </p>
              </Col>
             
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;