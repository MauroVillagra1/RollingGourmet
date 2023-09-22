import { Card } from "react-bootstrap";
import "./CardProgrammer.css";

const CardProgrammer = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <Card
          style={{ width: "100%" }}
          className="d-flex flex-md-row card_title my-5"
        >
          <div className="m-md-2 w-lg-50 w-100 border border-5 border-opacity-75 rounded">
            <Card.Img
              variant="top"
              src="emitorres.jpg"
              className="d-flex flex-wrap align-items-center"
            />
          </div>
          <div className="w-lg-50 w-100 px-md-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-1 mb-md-4 pb-2 text-light">
                Martín Gramajo
              </Card.Title>
              <Card.Text className="text fs-4 mt-5">
                <span className="fw-bold">Edad:</span> 29 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Teach Leader
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span>{" "}
                martingramajo08@gmail.com
              </Card.Text>{" "}
              <div className="container mx-0 mt-md-5 text-center ">
                <div className="row d-flex flex-md-row">
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <img
                      width="38%"
                      src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                      alt="instagram"
                    />
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>

        <Card
          style={{ width: "100%" }}
          className="d-flex flex-md-row card_title my-5"
        >
          <div className="m-md-2 w-lg-50 w-100 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-md-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-1 mb-md-4 pb-2 text-light">
                Mauro Villagra
              </Card.Title>

              <Card.Text className="text fs-4 mt-5">
                <span className="fw-bold">Edad:</span> 21 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Scrum Master
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span>{" "}
                maurovillagra257@gmail.com
              </Card.Text>
              <div className="container mx-0 mt-md-5 text-center ">
                <div className="row d-flex flex-md-row">
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <img
                      width="38%"
                      src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                      alt="instagram"
                    />
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{ width: "100%" }}
          className="d-flex flex-md-row card_title my-5"
        >
          <div className="m-md-2 w-lg-50 w-100 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-md-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-1 mb-md-4 pb-2 text-light">
                Emiliana Torres
              </Card.Title>

              <Card.Text className="text fs-4 mt-5">
                <span className="fw-bold">Edad:</span> 29 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span>Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span> emi.mtorresbq@gmail.com
              </Card.Text>
              <div className="container mx-0 mt-md-5 text-center ">
                <div className="row d-flex flex-md-row">
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <img
                      width="38%"
                      src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                      alt="instagram"
                    />
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>

        <Card
          style={{ width: "100%" }}
          className="d-flex flex-md-row card_title my-5"
        >
          <div className="m-md-2 w-lg-50 w-100 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-md-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-1 mb-md-4 pb-2 text-light">
                Álvaro Molina
              </Card.Title>

              <Card.Text className="text fs-4 mt-5">
                <span className="fw-bold">Edad:</span> 33 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span> alvaromolina90@gmail.com
              </Card.Text>
              <div className="container mx-0 mt-md-5 text-center ">
                <div className="row d-flex flex-md-row">
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <img
                      width="38%"
                      src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                      alt="instagram"
                    />
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{ width: "100%" }}
          className="d-flex flex-md-row card_title my-5"
        >
          <div className="m-md-2 w-lg-50 w-100 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-md-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-1 mb-md-4 pb-2 text-light">
                Jonathan Carrasco
              </Card.Title>

              <Card.Text className="text fs-4 mt-5">
                <span className="fw-bold">Edad:</span> 33 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span> Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span>{" "}
                jonathantello.dev@gmail.com
              </Card.Text>
              <div className="container mx-0 mt-md-5 text-center ">
                <div className="row d-flex flex-md-row">
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <img
                      width="38%"
                      src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                      alt="instagram"
                    />
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
        <Card
          style={{ width: "100%" }}
          className="d-flex flex-md-row card_title my-5"
        >
          <div className="m-md-2 w-lg-50 w-100 border border-5 border-opacity-75 rounded">
            <Card.Img variant="top" src="emitorres.jpg" />
          </div>
          <div className="container px-md-4">
            <Card.Body>
              <Card.Title className="title fw-bold fs-1 mb-md-4 pb-2 text-light">
                Lucas Anachuri
              </Card.Title>

              <Card.Text className="text fs-4 mt-5">
                <span className="fw-bold">Edad:</span> 34 años
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Rol:</span>Collaborating member
              </Card.Text>
              <Card.Text className="text fs-5">
                <span className="fw-bold">Email:</span> lucas.anachuri@gmail.com
              </Card.Text>
              <div className="container mx-0 mt-md-5 text-center ">
                <div className="row d-flex flex-md-row">
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <img
                      width="38%"
                      src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"
                      alt="instagram"
                    />
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>
                  </div>
                  <div className="col m-md-2 py-2 border-0 rounded pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="38%"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CardProgrammer;
