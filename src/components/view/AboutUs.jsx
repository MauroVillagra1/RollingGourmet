import CardProgrammer from "./programmer/CardProgrammer";
import "./programmer/CardProgrammer.css";
import { Container } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs container-fluid w-100">
        <div className="d-flex flex-column justify-content-center py-5">
          <h1 className="text-center pb-5 fs-1 fw-bold text-light title">
            About us
          </h1>
          <p className="mx-5 text-center fw-bolder fs-5 text mb-5">
            Six programmrs joined forces to create an online menu page to make
            ordering easier. They worked together to design a friendly and
            secure interface, prioritizing the user experience. After months of
            effort, they achivieved their goal: a platform that simplifies the
            process of ordering food and drinks online, improving the lives of
            its users.
          </p>
        </div>
        <div className="container-fluid w-75">
          <CardProgrammer></CardProgrammer>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
