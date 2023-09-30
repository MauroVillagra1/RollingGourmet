import { Card } from "react-bootstrap";
import "./CardProgrammer.css";
import { Link } from "react-router-dom";

const CardProgrammer = ({Programmer}) => {

  return (

    <> {Programmer.map((resp)=>(
      <div className="content-programmer d-flex my-5">
        <div className="content-img-programmer w-25 d-flex justify-content-center align-items-center"><img src={resp.Image} alt="img-programmer" /></div>
        <div className="content-text-programmer w-100 text-light d-flex flex-column">
          <div className="date-programmer w-100 justify-content-center">
          <h3>{resp.Name}</h3>
          <p>{resp.Years} Years</p>
          <p>{resp.Role}</p>
          <p>{resp.Email}</p>
          </div>
         <div className="d-flex w-100">
          <Link to={resp.LinkGithub || "error"}>
          <img className="mx-1" src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1696037692/Rolling%20Gourmet/ICON%20LOGIN/logo_github_icon_143196_a28cht.png" alt="github" />
          </Link>
          <Link to={resp.LinkLinkedin || "error"}>
          <img className="mx-1" src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1696037696/Rolling%20Gourmet/ICON%20LOGIN/linkedin_icon-icons.com_65929_1_uimfxz.png" alt="linkedin" />
          </Link>
          <Link to={resp.LinkInstagram || "error"}>
          <img className="mx-1" src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1696037699/Rolling%20Gourmet/ICON%20LOGIN/1491580635-yumminkysocialmedia26_83102_rkcdir.png" alt="instagram" />
          </Link>
         </div>
        </div>
      </div>
    ))}
      
    </>
  );
};

export default CardProgrammer;
