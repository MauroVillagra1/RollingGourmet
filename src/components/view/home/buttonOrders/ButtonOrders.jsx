import { Link } from "react-router-dom";
import "./ButtonOrders.css";
import { useState, useEffect } from "react";

function ButtonOrders({ countGlobal }) {
  const [showComponent, setShowComponent] = useState(false);
  const displayCount = countGlobal > 99 ? "99" : countGlobal;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      const scrollThreshold = 200;

      if (scrollY > scrollThreshold) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Link to={"/my-orders"}>
        {showComponent && (
          <div className="container_button_orders">
            <div className="count_button-orders d-flex justify-content-center align-items-center text-light">
              +{displayCount}
            </div>
            <img
              src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1695424758/Rolling%20Gourmet/IMG%20HOME/shopping-cart-add-button_icon-icons.com_56132_1_uvmoox.png"
              alt="cart"
              draggable="false"
            />
          </div>
        )}
      </Link>
    </>
  );
}

export default ButtonOrders;
