import React, { useState } from "react";
import { Button, Card, CardBody, CardText, Container, Row, Col } from "react-bootstrap";
import "./Error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  const [message, setMessage] = useState("");

  const handleGoHome = () => {
    setMessage("");
  };

  return (
    <Container >
      <Row>
        <Col sm={12}>
          <Card>
            <CardBody >
              <CardText>
                <h1 className="error4040-h1" >404</h1>
                <p className="error404-p" >Whoops... Page not found!!!</p>
                <Link to={'/'}>
                <Button variant="success" onClick={handleGoHome}>Go Home</Button></Link>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;