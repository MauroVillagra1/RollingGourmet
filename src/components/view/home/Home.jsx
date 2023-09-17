import React, { useEffect, useState } from "react";
import "./Home.css";
import { Form, FormGroup } from "react-bootstrap";
import { set, useForm } from "react-hook-form";
import CardProduct from "../product/CardProduct";
import { listCategories, listProducts } from "../../helpers/queries";

function home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsFilter, setProductsFilter] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  var order = [{
    ProductID: "",
    ProductName: "",
    Price: 0,
    Stock: "",
    quantity: 0,
    State: "",
  }]
  useEffect(() => {
    listProducts().then((resp) => {
      setProducts(resp);
      setProductsFilter(resp)
    });
    listCategories().then((resp) => {
      setCategories(resp);
    });
  }, []);

  function handleCategoryChange(event) {
    const selectCategory = event.target.value;
    if(selectCategory === "")
    {
      setProductsFilter(products)
    }
    else{
      var newProductsfilter = []
      products.forEach((product) => {
        product.CategoriesID.forEach((Category) => {
          if(selectCategory === Category)
          {
            newProductsfilter.push(product)
          }
        });
      })
      setProductsFilter(newProductsfilter)
      console.log(newProductsfilter)
    }   
  }
  function handleSearchChange(event) {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredProducts = productsFilter.filter((product) =>
      product.NameProduct.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
          <div className="d-flex">
            <Form className="search_bar mx-2">
              <FormGroup>
                <Form.Control type="text" placeholder="Search by name..." value={searchTerm}
                  onChange={handleSearchChange} />
              </FormGroup>
            </Form>
            <Form className="select_combobox mx-2">
              <FormGroup>
                <Form.Select
                  onChange={(event) => handleCategoryChange(event)}
                  className="select_option_category"
                >
                  <option value="">Seleccione una opción</option>

                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>{category.Category}</option>
                  ))}
                </Form.Select>
              </FormGroup>
            </Form>
          </div>
          <div className="list_products px-5 py-5 d-flex flex-wrap justify-content-center">
          {productsFilter.length === 0 ? (
          <p className="text-light">No products were found with this category.</p>
        ) : (
          productsFilter.map((product) => (
            <CardProduct key={product._id} product={product} order={order}></CardProduct>
          ))
        )}
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
