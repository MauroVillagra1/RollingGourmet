import "./Administrator.css";
import Button from "react-bootstrap/Button";

const Administrator = () => {
  return (
    <section className="bg-admin-page center">
      <div>
        <h1 className="text-color-title text-center pb-5">Administrator</h1>
        <div className="d-flex flex-column">
          <Button className="my-2 btn-admin text-white border-0">
            <span>User Management</span>
          </Button>
          <Button className="my-2 btn-admin text-white border-0">
            <span>Product Management</span>
          </Button>
          <Button className="my-2 btn-admin text-white border-0">
            <span>Orders Management</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Administrator;
