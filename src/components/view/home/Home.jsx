import React from "react";
import "./Home.css";
import {Form, FormGroup} from "react-bootstrap";
import { set, useForm } from "react-hook-form";
import CardProduct from "../product/CardProduct";

function home() {
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
              <Form.Control type="text" placeholder="Search by name..." />
            </FormGroup>
          </Form>
          <Form className="select_combobox mx-2">
            <FormGroup>
              <Form.Select
                className="select_option_category"
              >
                <option value="0">Seleccione una opción</option>
              
                {/* {categorias.map((categoria, index) => (
                  <option>
                    
                  </option>
                ))} */}
              </Form.Select>
            </FormGroup>
          </Form>
            </div>
         <div className="list_products px-5 py-5 d-flex flex-wrap justify-content-center">
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>
            <CardProduct></CardProduct>

         </div>
        </div>
      </div>
    </>
  );
}

export default home;
