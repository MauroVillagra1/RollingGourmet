import { Card } from "react-bootstrap";
import "./CardProgrammer.css";

const CardProgrammer = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Card
          style={{ width: "45rem" }}
          className="d-flex flex-row card_title my-5"
        >
          <div className="m-2 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-2 mb-4 pb-2 text-light">
                Martín Gramajo
              </Card.Title>

              <Card.Text className="text fs-5">
                <span className="fw-bold">Edad:</span> 29 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Teach Leader
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span>{" "}
                martingramajo08@gmail.com
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{ width: "45rem" }}
          className="d-flex flex-row card_title my-5"
        >
          <div className="m-2 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-2 mb-4 pb-2 text-light">
                Mauro Villagra
              </Card.Title>

              <Card.Text className="text fs-5">
                <span className="fw-bold">Edad:</span> 29 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Scrum Master
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span>{" "}
                maurovillagra257@gmail.com
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{ width: "45rem" }}
          className="d-flex flex-row card_title my-5"
        >
          <div className="m-2 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-2 mb-4 pb-2 text-light">
                Emiliana Torres
              </Card.Title>

              <Card.Text className="text fs-5">
                <span className="fw-bold">Edad:</span> 29 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span>Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span> emi.mtorresbq@gmail.com
              </Card.Text>
            </Card.Body>
          </div>
        </Card>

        <Card
          style={{ width: "45rem" }}
          className="d-flex flex-row card_title my-5"
        >
          <div className="m-2 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-2 mb-4 pb-2 text-light">
                Álvaro Molina
              </Card.Title>

              <Card.Text className="text fs-5">
                <span className="fw-bold">Edad:</span> 33 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span> alvaromolina90@gmail.com
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{ width: "45rem" }}
          className="d-flex flex-row card_title my-5"
        >
          <div className="m-2 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-2 mb-4 pb-2 text-light">
                Jonathan Carrasco
              </Card.Title>

              <Card.Text className="text fs-5">
                <span className="fw-bold">Edad:</span> 33 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span>{" "}
                jonathantello.dev@gmail.com
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{ width: "45rem" }}
          className="d-flex flex-row card_title my-5"
        >
          <div className="m-2 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-2 mb-4 pb-2 text-light">
                Lucas Anachuri
              </Card.Title>

              <Card.Text className="text fs-5">
                <span className="fw-bold">Edad:</span> 33 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span>Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span> lucas.anachuri@gmail.com
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardProgrammer;
