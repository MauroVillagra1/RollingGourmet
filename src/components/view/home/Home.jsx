import React, { useEffect, useState } from "react";
import "./Home.css";
import { Form, FormGroup, Button } from "react-bootstrap";
import CardProduct from "../product/CardProduct";
import { listCategories, listProducts } from "../../helpers/queries";
import ButtonOrders from "./buttonOrders/ButtonOrders"
function home({ userActive, setUserActive }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const ordersJson = localStorage.getItem("orders");
  const ordersJson_retrieved = JSON.parse(ordersJson);
  const [order, setOrder] = useState(ordersJson_retrieved || []);
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const countG = localStorage.getItem("countGlobal");
  const countGlobal_local = JSON.parse(countG);
  const [countGlobal, setCountGlobal] = useState(countGlobal_local || 0)
  var newOrders = [];
 

  useEffect(() => {
    const ordersJson = JSON.stringify(order);
    localStorage.setItem("orders", ordersJson);
    
  }, [order]);

  useEffect(() => {
    listProducts().then((resp) => {
      setProducts(resp);
      setProductsFilter(resp);
    });
    listCategories().then((resp) => {
      setCategories(resp);
    });
    setUserActive(JSON.parse(sessionStorage.getItem("userActive")))
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  }

  function handleSearchButtonClick() {
    const filteredProducts = products.filter((product) => {
      const nameMatches = product.NameProduct.toLowerCase().includes(
        searchTerm.toLowerCase()
      );
      const categoryMatches =
        selectedCategory === "" ||
        product.CategoriesID.includes(selectedCategory);
      return nameMatches && categoryMatches;
    });

    setProductsFilter(filteredProducts);
  }

  return (
    <>
      <div className="home">
        <div className="home_header">
          <div className="page_entry d-flex justify-content-center">
            <div className="img_page_entry">
              <img
                src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1694745259/Rolling%20Gourmet/IMG%20HOME/image_23_wwjkn7.png"
                alt="page_entry_img"
                draggable="false"
              />
            </div>
            <div className="text_page_entry d-flex justify-content-center align-items-center">
              <h4>
                Welcome to <br />
                <span className="text_header_rolling">Rolling </span>
                <span className="text_header_gourmet">Gourmet</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="home_body mt-5">
          <div>
            <Form
              className="d-flex flex-wrap justify-content-center"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormGroup className="search_bar mx-2 mb-2">
                <Form.Control
                  type="text"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </FormGroup>

              <FormGroup className="select_combobox mx-2 mb-2">
                <Form.Select
                  onChange={(event) => handleCategoryChange(event)}
                  className="select_option_category"
                >
                  <option value="">Select an option</option>
                  <option value="">Alls</option>

                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.Category}
                    </option>
                  ))}
                </Form.Select>
              </FormGroup>

              <FormGroup>
                <Button
                  className="search_name"
                  onClick={handleSearchButtonClick}
                >
                  Search
                </Button>{" "}
              </FormGroup>
            </Form>
          </div>
          <div className="list_products px-5 py-5 d-flex flex-wrap justify-content-center">
            {productsFilter.length === 0 ? (
              <p className="text-light">
                No products were found with this category.
              </p>
            ) : (
              productsFilter.map((product) => (
                <CardProduct
                  key={product._id}
                  product={product}
                  order={order}
                  setOrder={setOrder}
                  newOrders={newOrders}
                  userActive={userActive}
                  setCountGlobal={setCountGlobal}
                  countGlobal={countGlobal}
                ></CardProduct>
              ))
            )}
          </div>
          <ButtonOrders countGlobal={countGlobal}></ButtonOrders>

        </div>
      </div>
    </>
  );
}

export default home;
