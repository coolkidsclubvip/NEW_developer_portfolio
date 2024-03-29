import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import mures from "../images/mures.jpg";
import UseScrollTrigger from "../components/UseScrollTrigger.js";

function Mures() {

  //gsap/ScrollTrigger effect
  const ref = useRef(null);
  UseScrollTrigger(ref);

  return (
    <>
      <Container className="container">
        <Card className="card" ref={ref}>
          <Card.Img src={mures} alt="Card image" />
          <Card.Header>
            <Card.Title>
              <h4>
                <i>Mures Tasmania, 2013</i>
              </h4>{" "}
            </Card.Title>
            <Card.Text>
              This is a web desgin work for Cert IV of design, development tools used are Photoshop and Dreamweaver.
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Header>
        </Card>
      </Container>
    </>
  );
}

export default Mures;
