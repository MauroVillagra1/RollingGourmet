import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import "../product/CardProduct.css"

import { listOrders } from '../../helpers/queries';
import Swal from 'sweetalert2';
function CardProduct({product, order, setOrder, newOrders, userActive, setCountGlobal, countGlobal}) {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(product.Stock);
    const [statusEffect, setStatusEffect] = useState(false);
    const [orderLocal, setOrderLocal] = useState({})
    const [orderDB, setOrderDB] = useState([])
    const newArray = [...order]

    var newOrder = {
    }  
    useEffect(()=>{
      listOrders().then((resp)=>{
        setOrderDB(resp)
      })
      const ordersJson = localStorage.getItem("orders");
      const ordersJson_retrieved = JSON.parse(ordersJson);
      ordersJson_retrieved.map((orderJson_retrieved)=>{
        if(orderJson_retrieved.ProductID === product._id.toString())
        {
          setCount(orderJson_retrieved.quantity)
          setStock(orderJson_retrieved.Stock)
        }
      })
      
        },[])

  const handleAddOrder = () => {
    if(count <= product.Stock){
    var x = 0
    if (userActive._id !== undefined){
      
      orderDB.map((ord)=>{
      if(ord.IdUser === userActive._id && ord.State === "Pending")
      {
        x=1
      }
    })
    if(x===0)
    {
      if (count < product.Stock)
      {
          setCount(count + 1);
          setStock(stock - 1);
          setCountGlobal((countGlobal+1))
          const x = JSON.stringify(countGlobal+1);
          localStorage.setItem("countGlobal", x);
      }
    }
  };

  const handleRemoveOrder = () => {
    if(count > 0){
    var x = 0
    if (userActive._id !== undefined){
      orderDB.map((ord)=>{
        if(ord.IdUser === userActive._id && ord.State === "Pending")
        {
        x=1
      }
    })
    if(x===0)
    {
      if (count < product.Stock)
      {
          setCount(count - 1);
          setStock(stock + 1);
          setCountGlobal((countGlobal-1))
          const x = JSON.stringify(countGlobal-1);
          localStorage.setItem("countGlobal", x);
      }
    }
  };

  useEffect(() => {
    if (count > 0 || statusEffect === true) {
      let newOrder = {
        ProductID: product._id.toString(),
        ProductName: product.NameProduct,
        Price: product.Price,
        Stock: stock,
        quantity: count,
      };
      var c = 0;
      if (count > 0) {
        order.map((ord) => {
          if (ord.ProductID === product._id.toString()) {
            c++;
            const newArray2 = newArray.filter(
              (orderItem) => orderItem.ProductID !== product._id.toString()
            );
            newArray2.push(newOrder);
            setOrder(newArray2);
          }
        });
        if (c === 0) {
          newArray.push(newOrder);
          setOrder(newArray);
          c = 0;
        }
      }
      if (count === 0) {
        const newOrder_ = order.filter(
          (orderItem) => orderItem.ProductID !== product._id.toString()
        );
        setOrder(newOrder_);
      }

      setStatusEffect(true);
    }
  }, [count, product]);

  return (
    <>
      <div className="card_content d-flex flex-column mx-2 my-2">
        <div className="card_header d-flex justify-content-center align-items-center">
          <img src={product.Image} alt="product_name" />

          <div className="order_count d-flex justify-content-center align-items-center">
            <p className="text-light">{count}</p>
          </div>
          <div className="order_Stock d-flex justify-content-center align-items-center">
            <p className="text-light">Product available:{stock}</p>
          </div>
        </div>
        <div className="card_body">
          <div className="card_product_name text-light text-center">
            <h4>{product.NameProduct}</h4>
          </div>
          <div className="card_product_price text-center">
            <p>${product.Price}</p>
          </div>
          <div className="card_button_container d-flex flex-column">
            <Button className="button_showme">Show More</Button>
            <div className="d-flex group_button">
              <Button
                className="button_add_order mx-1"
                onClick={handleAddOrder}
              >
                Add Order
              </Button>
              <Button
                className="button_remove_order mx-1"
                onClick={handleRemoveOrder}
              >
                Remove Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProduct;
