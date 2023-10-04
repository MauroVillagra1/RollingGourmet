import "./Administrator.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Administrator = () => {
  return (
    <section className="bg-admin-page center">
      <div>
        <h1 className="text-color-title text-center pb-5">Administrator</h1>
        <div className="d-flex flex-column">
          <Button
            as={Link}
            to="/administrator/users"
            className="my-2 btn-admin text-white border-0 center"
          >
            User Management
          </Button>

          <Button
            as={Link}
            to="/administrator/products"
            className="my-2 btn-admin text-white border-0 center"
          >
            Product Management
          </Button>
          <Button
            as={Link}
            to="/administrator/orders"
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
