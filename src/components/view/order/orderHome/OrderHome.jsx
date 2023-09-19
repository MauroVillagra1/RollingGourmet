import React, { useEffect, useState } from 'react'
import "./OrderHome.css"
import { listOrders } from '../../../helpers/queries'
import CardOrder from "../orderCard/CardOrder"

function orderHome() {
  const [order, setOrder] = useState([])
  useEffect(()=>{
    listOrders().then((ord)=>{
      setOrder(ord)
    })
   
  },[])
  useEffect(()=>{
  },[order])
  return (
    <div className='home_order p-2'>
    <div className='text-light w-100 text-center title_orders mb-5'><h4>My Orders</h4></div>
    <div className='d-flex flex-wrap justify-content-center'>
      {order.map((ord, index)=>(
        <CardOrder key={ord._id} order={ord} index={index+1}></CardOrder>
      ))}
    </div>
    </div>
  )
}

export default orderHome