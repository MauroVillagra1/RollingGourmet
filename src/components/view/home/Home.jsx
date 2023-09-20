import React, { useEffect, useState } from "react";
import "./Home.css";

import { Form, FormGroup, Button } from "react-bootstrap";
import { set, useForm } from "react-hook-form";
import CardProduct from "../product/CardProduct";
import { listCategories, listProducts } from "../../helpers/queries";


function home({ userActive }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const ordersJson = localStorage.getItem("orders");
  const ordersJson_retrieved = JSON.parse(ordersJson);
  const [order, setOrder] = useState(ordersJson_retrieved || []);
  const [selectedCategory, setSelectedCategory] = useState(""); // Agrega el estado de la categoría seleccionada

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
  }, []);

  function handleCategoryChange(event) {

    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  }

  function handleSearchButtonClick() {
    // Filtra los productos basados en el término de búsqueda y la categoría seleccionada al hacer clic en el botón "Search"
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

          <div >
          <Form className="d-flex flex-wrap justify-content-center" onSubmit={(e) => {
  e.preventDefault(); 
  
}}>
           
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
                ></CardProduct>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
