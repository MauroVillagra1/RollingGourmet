import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import "../product/CardProduct.css"
function CardProduct() {
    const [count, setCount] = useState(0);

  const handleAddOrder = () => {
    if (count < 99)
    {
        setCount(count + 1);

    }
  };

  const handleRemoveOrder = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
    <div className='card_content d-flex flex-column mx-2 my-2'>
        <div className='card_header d-flex justify-content-center align-items-center'>
            <img src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1694744246/Rolling%20Gourmet/IMG%20PRODUCTS/image-removebg-preview_61_pnmqam.png" alt="product_name" />
            
            <div className='order_count d-flex justify-content-center align-items-center'>
            <p className="text-light">{count}</p>
            </div>

        </div>
        <div className='card_body'>
            <div className='card_product_name text-light text-center'><h4>Big Mac</h4></div>
            <div className='card_product_price text-center'><p>$2500</p></div>
            <div className='card_button_container d-flex flex-column'>
                <Button className='button_showme'>Show More</Button>
                <div className='d-flex group_button'>
                <Button className='button_add_order mx-1' onClick={handleAddOrder}>Add Order</Button>
              <Button className='button_remove_order mx-1' onClick={handleRemoveOrder}>Remove Order</Button>
            </div>
               

            </div>
        </div>
    </div>
    </>
  )
}

export default CardProduct