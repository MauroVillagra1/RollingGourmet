import React, { useEffect } from "react";
import "./Order.css";
import CardProduct from "../../product/CardProduct";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import {
  createOrders,
  listOrders,
  listProducts,
} from "../../../helpers/queries";
import { set } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Order({ userActive }) {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");
  const ordersJson = localStorage.getItem("orders");
  const ordersJson_retrieved = JSON.parse(ordersJson);
  const [order, setOrder] = useState(ordersJson_retrieved || []);
  const [products, setProducts] = useState([]);
  const [productFilter, setProductFilter] = useState([]);

  let newOrders = [];

  function obtenerFechaYHoraActual() {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1; // Sumamos 1 porque en JavaScript los meses van de 0 a 11
    const año = ahora.getFullYear();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    // Formatea el día, mes, hora, minutos y segundos para que tengan dos dígitos
    const diaFormateado = dia < 10 ? `0${dia}` : dia;
    const mesFormateado = mes < 10 ? `0${mes}` : mes;
    const horaFormateada = hora < 10 ? `0${hora}` : hora;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;

    // Devuelve la fecha y hora en formato YYYY-MM-DD HH:MM:SS
    return `${año}-${mesFormateado}-${diaFormateado} ${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
  }

  const handleCloseBuy = () => {
    let x = 0;
    setShow(false);
    const Date = obtenerFechaYHoraActual();
    let storageOrder = {
      Order: order,
      State: "Pending",
      Adress: address,
      Date: Date,
      IdUser: userActive._id,
      NameUser: userActive.userName
    };

    
    listOrders().then((orderDB) => {
      const hasMatchingOrder = orderDB.some((ord) => (ord.IdUser === userActive._id && ord.State === "Pending"));
      if (hasMatchingOrder) {
        Swal.fire("You already have a pending order.")
        localStorage.removeItem("orders");
        localStorage.removeItem("countGlobal");
        setProductFilter([]);
      } else {
        createOrders(storageOrder);
        localStorage.removeItem("orders");
        localStorage.removeItem("countGlobal");
        Swal.fire("Your order was saved successfully")
        setProductFilter([]);
      }
    });
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const isBuyButtonDisabled = address.trim() === "";

  useEffect(() => {
    listProducts().then((resp) => {
      setProducts(resp);
    });
    
  }, []);
  useEffect(() => {
    const ordersJson = JSON.stringify(order);
    localStorage.setItem("orders", ordersJson);
  }, [order]);

  useEffect(() => {
    let productsFilt = [];
    products.map((product) => {
      order.map((ord) => {
        if (product._id.toString() === ord.ProductID) {
          productsFilt.push(product);
        }
      });
    });

    setProductFilter(productsFilt);
  }, [products, order]);

  return (
    <div className="order_container p-5">
      <div className="order_header text-center text-light">
        <h3>Your orders</h3>
      </div>
      <div className="order_body flex-wrap d-flex justify-content-center">
        {productFilter.length === 0 ? (
          <div className="d-flex flex-column">
            <div className="text-light text_not_order">
              <p>No orders have been made yet.</p>
            </div>
            <Link className="btn" to={"../"}>
            <Button onClick={handleShow}>Back to Home</Button>
            </Link>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <div className="d-flex flex-wrap">
              {productFilter.map((productFilter_) => (
                <CardProduct
                  key={productFilter_._id}
                  product={productFilter_}
                  order={order}
                  setOrder={setOrder}
                  newOrders={newOrders}
                  userActive={userActive}
                ></CardProduct>
              ))}
            </div>
            <div className="order_footer d-flex justify-content-center">
              <Button onClick={handleShow}>Make an order</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Order</Modal.Title>
              </Modal.Header>
              <Form>
                <Modal.Body>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your address"
                      autoFocus
                      required
                      value={address}
                      onChange={handleAddressChange}
                    />
                  </Form.Group>
                  {order.map((orderItem) => (
                    <div
                      className="d-flex modal_body"
                      key={orderItem.ProductID}
                    >
                      <div>
                        {orderItem.ProductName} x {orderItem.quantity}
                      </div>
                      <div>${orderItem.quantity * orderItem.Price}</div>
                    </div>
                  ))}

                  <div className="d-flex modal_body total">
                    <div>Total:</div>
                    <div>
                      $
                      {order.reduce((acc, orderItem) => {
                        return acc + orderItem.quantity * orderItem.Price;
                      }, 0)}{" "}
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="warning"
                    className="w-25 text-light "
                    onClick={() => {
                      handleCloseBuy();
                    }}
                    disabled={isBuyButtonDisabled}
                  >
                    Buy
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
