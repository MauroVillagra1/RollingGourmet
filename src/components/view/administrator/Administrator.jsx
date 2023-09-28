import "./Administrator.css";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Administrator = () => {
  return (
    <section className="bg-admin-page center">
      <div>
        <h1 className="text-color-title text-center pb-5">Administrator</h1>
        <div className="d-flex flex-column">
          <Button
            as={NavLink}
            to="/administrator/user"
            className="my-2 btn-admin text-white border-0 center"
          >
            User Management
          </Button>
          <Button
            as={NavLink}
            to="/administrator/product"
            className="my-2 btn-admin text-white border-0 center"
          >
            Product Management
          </Button>
          <Button
            as={NavLink}
            to="/administrator/order"
            className="my-2 btn-admin text-white border-0 center"
          >
            Orders Management
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Administrator;
