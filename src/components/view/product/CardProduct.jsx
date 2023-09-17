import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import "../product/CardProduct.css"
function CardProduct({product}) {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(product.Stock);


  const handleAddOrder = () => {
    if (count < product.Stock)
    {
        setCount(count + 1);
        setStock(stock - 1)
    }
  };

  const handleRemoveOrder = () => {
    if (count > 0) {
      setCount(count - 1);
      setStock(stock + 1)

    }
  };

  return (
    <>
    <div className='card_content d-flex flex-column mx-2 my-2'>
        <div className='card_header d-flex justify-content-center align-items-center'>
            <img src={product.Image} alt="product_name" />
            
            <div className='order_count d-flex justify-content-center align-items-center'>
            <p className="text-light">{count}</p>
            </div>
            <div className='order_Stock d-flex justify-content-center align-items-center'>
            <p className="text-light">Product available:{stock}</p>
            </div>

        </div>
        <div className='card_body'>
            <div className='card_product_name text-light text-center'><h4>{product.NameProduct}</h4></div>
            <div className='card_product_price text-center'><p>${product.Price}</p></div>
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