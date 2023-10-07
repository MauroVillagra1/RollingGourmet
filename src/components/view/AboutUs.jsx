import CardProgrammer from "./programmer/CardProgrammer";
import "./programmer/CardProgrammer.css";

const AboutUs = () => {
  const Programmer = [
    {
      Name: "Martin Gramajo",
      Image:
        "https://res.cloudinary.com/dhe7vivfw/image/upload/v1696036878/Rolling%20Gourmet/IMG%20PROGRAMMER/303fa6eb-40d2-43b7-9973-f88c30effb5f_omb25b.jpg",
      Role: "Teach Leader",
      Years: "29",
      Email: "martingramajo08@gmail.com",
      LinkInstagram: "https://www.instagram.com/_mago.jpg/",
      LinkGithub: "https://github.com/MartinGramajo",
      LinkLinkedin: "https://www.linkedin.com/in/martin-gramajo-20740a221/",
    },
    {
      Name: "Mauro Villagra",
      Image:
        "https://res.cloudinary.com/dhe7vivfw/image/upload/v1696037198/Rolling%20Gourmet/IMG%20PROGRAMMER/90ebd780a48390b673bc34e771f82f93_gfqa3j.jpg",
      Role: "Scrum Master",
      Years: "21",
      Email: "maurovillagra257@gmail.com",
      LinkInstagram: "https://www.instagram.com/mauro_villagra1/",
      LinkGithub: "https://github.com/MauroVillagra1",
      LinkLinkedin: "https://www.linkedin.com/in/mauro-villagra-59433a253/",
    },
    {
      Name: "Emiliana Torres",
      Image:
        "https://res.cloudinary.com/dhe7vivfw/image/upload/v1696029648/Rolling%20Gourmet/IMG%20PROGRAMMER/image_25_tt5x94.png",
      Role: "Collaborating member",
      Years: "29",
      Email: "emi.mtorresbq@gmail.com",
      LinkInstagram: "https://www.instagram.com/emiliana.mtorres/",
      LinkGithub: "https://github.com/EmiTorres93",
      LinkLinkedin: "https://www.linkedin.com/in/emiliana-maria-078811197/",
    },
    {
      Name: "Jonathan Emmanuel Tello Carrasco",
      Image:
        "https://res.cloudinary.com/dhe7vivfw/image/upload/v1696036898/Rolling%20Gourmet/IMG%20PROGRAMMER/bd5f5710-b864-4aac-9815-37add5674904_ypvaag.jpg",
      Role: "Collaborating member",
      Years: "33",
      Email: "jonathantello.dev@gmail.com",
      LinkInstagram: "https://www.instagram.com/jonytelloc/",
      LinkGithub: "https://github.com/jonytellodev",
      LinkLinkedin: "",
    },
    {
      Name: "Lucas Eduardo Anachuri",
      Image:
        "https://res.cloudinary.com/dhe7vivfw/image/upload/v1696036876/Rolling%20Gourmet/IMG%20PROGRAMMER/8dd6a1f1-4352-478c-99ba-8a04a470e1bd_umbac1.jpg",
      Role: "Collaborating member",
      Years: "34",
      Email: "lucas.anachuri@gmail.com",
      LinkInstagram: "https://www.instagram.com/lucasgyej",
      LinkGithub: "https://github.com/lucasgt",
      LinkLinkedin: "https://www.linkedin.com/in/lucas-anachuri/",
    },
  ];
  return (
    <>
      <div className="aboutus container-fluid w-100">
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
        <div className="w-100 justify-content-center d-flex">
          <div>
            <CardProgrammer Programmer={Programmer}></CardProgrammer>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
