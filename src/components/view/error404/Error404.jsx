import React, { useState } from "react";
import { Button, Card, CardBody, CardText, Container, Row, Col } from "react-bootstrap";
import "./Error404.css";

const Error404 = () => {
  const [setMessage] = useState("");

  const handleGoHome = () => {
    setMessage("");
  };

  return (
    <Container >
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody >
              <CardText className="">
                <h1 className="h1" >404</h1>
                <p className="p" >Whoops... Page not found!!!</p>
                <Button variant="success" onClick={handleGoHome}>Go Home</Button>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;