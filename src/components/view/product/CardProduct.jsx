import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import "../product/CardProduct.css"
function CardProduct({product, order}) {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(product.Stock);
    const [statusEffect, setStatusEffect] = useState(false);

  
    // useEffect(()=>{
    //   setStock(product.Stock)
    // },[])

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

  useEffect(()=>{
    if(count>0 || statusEffect===true)
    {
      var newOrder = {
          ProductID: product._id.toString(),
          ProductName: product.NameProduct,
          Price: product.Price,
          Stock: stock,
          quantity: count,
          State: "Active",
      }
      
      setStatusEffect(true)
      console.log(order)
      var c = 0
      if(count > 0)
      {
        order.map((ord)=>{
          // console.log(ord)
          console.log(product._id)
          console.log(ord.ProductID)
          if((ord.ProductID) === (product._id).toString()){
            ord = newOrder
            c++
          }
        })
        if(c===0)
        {
          order.push(newOrder)
        }
        console.log(order)
      } 
    }
  },[count])

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