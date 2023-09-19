import "./ProductDetail.css";
import { Card, Container } from "react-bootstrap";

const ProductDetail = () => {
  return (
    <>
      <div className="detail d-flex flex-column justify-content-center align-items-center">
        <div className="my-5 d-flex flex-column justify-content-center align-items-center w-75">
          <Card
            style={{ width: "100%" }}
            className="d-flex flex-lg-row flex-column card_title my-3 "
          >
            <div className="image_background m-2 w-lg-50 w-100 d-flex">
              <Card.Img
                src="https://images.pexels.com/photos/4243302/pexels-photo-4243302.jpeg"
                className="flex-wrap align-items-center"
              />
            </div>
            <div className="w-lg-50 w-100 body_background">
              <Card.Body>
                <Card.Title className="title fw-bold fs-1 mb-4 pb-2 text-light">
                  Product Name
                </Card.Title>
                <Card.Text className="title fw-bold fs-1 mb-4 pb-2 text_price">
                  $ Precio
                </Card.Text>
                <div className="container  mt-5 text-center fw-bold">
                  <div className="row  d-flex flex-md-row flex-column">
                    <div className="col mx-2 py-2 border-0 rounded">
                      <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                        Column
                      </h2>
                      <p className="text text-center">Text Description</p>
                    </div>
                    <div className="col mx-2 py-2 border-0 rounded">
                      <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                        Column
                      </h2>
                      <p className="text text-center">Text Description</p>
                    </div>
                    <div className="col mx-2 py-2 border-0 rounded">
                      {" "}
                      <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                        Column
                      </h2>
                      <p className="text text-center">Text Description</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>

          <Card
            style={{ width: "100%", height: "12rem" }}
            className="description d-flex card_title"
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
    </>
  );
};

export default ProductDetail;
