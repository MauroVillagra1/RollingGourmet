import { useEffect, useState } from "react";
import "./../administrator-product/AdministratorProduct.css";
import { Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProduct from "./ItemProduct";

import Swal from "sweetalert2";
import { listProducts } from "../../../helpers/queries";



const AdministratorProduct = () => {
  const [products, setProducts] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    setMostrarSpinner(true);
    listProducts()
      .then((resp) => {
        if (resp) {
          setProducts(resp);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ocurrio un error",
          "Intente realizar esta operación mas tarde",
          "error"
        );
      });
    setMostrarSpinner(false);
  }, []);

  const fetchProducts = () => {
    setMostrarSpinner(true);
    listProducts()
      .then((resp) => {
        if (resp) {
          setProducts(resp);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ocurrio un error",
          "Intente realizar esta operación mas tarde",
          "error"
        );
      })
      .finally(() => {
        setMostrarSpinner(false);
      });
  };
  useEffect(()=>{
    setMostrarSpinner(true);
    listProducts()
      .then((resp) => {
        if (resp) {
          setProducts(resp);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ocurrio un error",
          "Intente realizar esta operación mas tarde",
          "error"
        );
      });
    setMostrarSpinner(false);
  },[])
  useEffect(() => {
    listProducts()
      .then((respuestaProductos) => {
        if (respuestaProductos) {
          // actualizar el estado
          setProducts(respuestaProductos);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Ocurrio un error",
          "Intente realizar esta operación mas tarde",
          "error"
        );
      });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-product-page">
      <section className="container mainSection ">
        <div className="d-flex justify-content-between align-items-center  pt-5">
          <h1 className=" text-white">Product Manager</h1>
          <Link
            className="btn-create text-white btn"
            to="/administrator/product/create"
          >
            Create Product
          </Link>
        </div>
        <div>
          <hr />
        </div>
        {mostrarSpinner ? (
          <div className="my-5 d-flex justify-content-center">
            <Spinner className="fs-1" animation="border" variant="dark" />
          </div>
        ) : (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th className="priority-1">ID</th>
                <th className="priority-2">Product</th>
                <th className="priority-3">Price</th>
                <th className="priority-4">Image</th>
                <th className="priority-5">Details</th>
                <th className="priority-6">Options</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, id) => (
                <ItemProduct
                  key={id}
                  product={product}
                  setProducts={setProducts}
                ></ItemProduct>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </div>
  );
};

export default AdministratorProduct;
