import React from "react";
import { Button } from "react-bootstrap";
import "./CardOrder.css";
import { deleteOrders } from "../../../helpers/queries";

function CardOrder({ order, reload }) {
  let stateClassName = "";
  switch (order.State) {
    case "Pending":
      stateClassName = "text-warning";
      break;
    case "Delivered":
      stateClassName = "text-success";
      break;
    default:
      stateClassName = "";
  }

  const handleDelete = () => {
    deleteOrders(order._id);
    reload();
  };

  return (
    <div className="card_content d-flex flex-column mx-2 my-2">
      <div className="card_header_order d-flex justify-content-center align-items-center">
        <img
          className="h-75"
          src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695001920/Rolling%20Gourmet/IMG%20LOGO/ROLLING-GOURMET-nav_u7y7wl.png"
          alt="product_name"
        />
      </div>
      <div className="card_body">
        <div className={`card_product_name text-center ${stateClassName}`}>
          <h4>{order.State}</h4>
        </div>
        <div className="card_product_price_order text-center">
          <p>{order.Date}</p>
        </div>
        <div className="card_button_container_order d-flex flex-column">
          {order.State === "Pending" ? (
            <Button
              className="h-25"
              variant="danger"
              onClick={() => {
                handleDelete();
              }}
            >
              Cancel Order
            </Button>
          ) : (
            <img
              src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695089233/Rolling%20Gourmet/IMG%20LOGO/checkbox_103909_o37tet.png"
              alt="check_icon"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardOrder;
