import React from "react";
import "./Order.css";
import CardProduct from "../product/CardProduct";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function HomeOrder() {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");

  function obtenerFechaYHoraActual() {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1; 
    const año = ahora.getFullYear();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const diaFormateado = dia < 10 ? `0${dia}` : dia;
    const mesFormateado = mes < 10 ? `0${mes}` : mes;
    const horaFormateada = hora < 10 ? `0${hora}` : hora;
    const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;

    return `${año}-${mesFormateado}-${diaFormateado} ${horaFormateada}:${minutosFormateados}:${segundosFormateados}`;
  }

  const handleCloseBuy = () => {
    setShow(false);
    const fechaYHoraActual = obtenerFechaYHoraActual();
  };

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const isBuyButtonDisabled = address.trim() === "";

  return (
    <div className="order_container p-5">
      <div className="order_header text-center text-light">
        <h3>Your orders</h3>
      </div>
      <div className="order_body flex-wrap d-flex justify-content-center">
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
            <div className="d-flex modal_body">
              <div>Hamburguesa x 7</div>
              <div>$17500</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="warning"
              className="w-25 text-light"
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
  );
}

export default HomeOrder;
