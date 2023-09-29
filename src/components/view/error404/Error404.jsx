import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  const [message, setMessage] = useState("");

  const handleGoHome = () => {
    setMessage("");
  };

  return (
    <Container className="content-error404">
      <Row>
        <Col sm={12}>
          <Card className="content-card-404">
            <Card.Body className="text-light d-flex flex-column justify-content-center align-items-center"> 
              <Card.Title className="error4040-h1">
              404</Card.Title>
              <Card.Text className="error404-p"> Oops... Page not found!
              </Card.Text>
              <img src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1696026253/Rolling%20Gourmet/IMG%20ERROR404/image-removebg-preview_93_meqb6p.png" alt="hamburguer-error" />
              <Link to={'/'} className="w-50 content-button-404">
                  <Button variant="success" className="w-100" onClick={handleGoHome}>Go to start</Button>
                </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
