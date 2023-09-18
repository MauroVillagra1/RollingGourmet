import "./ProductDetail.css";
import { Card } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <div className="detail d-flex flex-column justify-content-center align-items-center">
      <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
        <Card
          style={{ width: "70rem", height: "25rem" }}
          className="d-flex flex-row card_title my-3"
        >
          <Card.Img
            style={{ width: "30rem" }}
            variant="top"
            src="https://images.pexels.com/photos/4243302/pexels-photo-4243302.jpeg"
          />

          <Card.Body>
            <Card.Title className="title fw-bold fs-1 mb-4 pb-2 text-light">
              Product Name
            </Card.Title>
            <Card.Text className="title fw-bold fs-2 mb-4 pb-2 text-light">
              $ Precio
            </Card.Text>
            <div class="container mt-5 text-center fw-bold">
              <div class="row">
                <div class="col ">
                  <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                    Column
                  </h2>
                  <p className="text text-center">Text Description</p>
                </div>
                <div class="col">
                  <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                    Column
                  </h2>
                  <p className="text text-center">Text Description</p>
                </div>
                <div class="col">
                  {" "}
                  <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                    Column
                  </h2>
                  <p className="text text-center">Text Description</p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "70rem", height: "12rem" }}
          className="d-flex card_title"
        >
          <Card.Title className="p-2 title fw-bold fs-1 text-light">
            Description
          </Card.Title>
          <Card.Body className="text">
            This is some text within a card body.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
