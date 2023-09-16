import { Button } from 'react-bootstrap'
import React from 'react'
import "../product/CardProduct.css"
function CardOrder() {
  return (
    <>
    <div className='card_content d-flex flex-column'>
        <div className='card_header d-flex justify-content-center align-items-center'>
            <img src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1694744246/Rolling%20Gourmet/IMG%20PRODUCTS/image-removebg-preview_61_pnmqam.png" alt="product_name" />
        </div>
        <div className='card_body'>
            <div className='card_product_name text-light text-center'><h4>Big Mac</h4></div>
            <div className='card_product_price text-center'><p>$2500</p></div>
            <div className='card_button_container d-flex flex-column'>
                {/* <Button className='button_showme'>Show More</Button> */}
                {/* <Button className='button_add_order'>Add Order</Button> */}
                <Button className='button_remove_order'>Remove Order</Button>

            </div>
        </div>
    </div>
    </>
  )
}

export default CardOrder