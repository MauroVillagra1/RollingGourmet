import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import { listCategories, listProducts } from "../../helpers/queries";
import { useState } from "react";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [categoriesID, setCategoriesID] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesSearch, setCategoriesSearch] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    listProducts().then((resp) => {
      setProducts(resp);
    });
    listCategories().then((resp) => {
      setCategories(resp);
    });
  }, []);
  useEffect(() => {
    products.map((resp) => {
      if (resp._id.toString() === id) {
        setProduct(resp);
        setCategoriesID(resp.CategoriesID);
      }
    });
  }, [products]);

  useEffect(() => {
    let arrayCategory = [];
    categories.map((resp) => {
      categoriesID.map((resp2) => {
        if (resp._id.toString() === resp2) {
          arrayCategory.push(resp);
        }
      });
    });
    setCategoriesSearch(arrayCategory);
  }, [categoriesID, categories]);

  return (
    <>
      <div className="detail d-flex flex-column justify-content-center align-items-center">
        <div className="my-5 d-flex flex-column justify-content-center align-items-center w-75">
          <Card
            className="d-flex flex-lg-row flex-column card_title my-3 w-100"
          >
            <div className="image_background w-lg-50 w-100 d-flex">
              <Card.Img
                src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1694744246/Rolling%20Gourmet/IMG%20PRODUCTS/image-removebg-preview_61_pnmqam.png"
                className="img-fluid customBgImg "
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
                    <div className="col m-2 py-2 border-0 rounded">
                      <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                        Column
                      </h2>
                      <p className="text text-center">Text Description</p>
                    </div>
                    <div className="col m-2 py-2 border-0 rounded">
                      <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                        Column
                      </h2>
                      <p className="text text-center">Text Description</p>
                    </div>
                    <div className="col m-2 py-2 border-0 rounded">
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
            className="description d-flex card_title w-100"
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
