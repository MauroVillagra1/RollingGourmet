import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { editOrder, listOrders} from "../../../helpers/queries";

const ItemOrder = ({ order, updateOrderList}) => {
  const [orders, setOrders] = useState([])
  const [total, setTotal] = useState(0)
  const [productsnames, setProductsNames] = useState("")

  useEffect(()=>{
    listOrders().then((resp)=>{
      resp.map((resp2)=>{
        if(resp2._id === order._id){
          setOrders(resp2.Order)
        }
      })
    })
  },[])

  useEffect(()=>{
    let Price = 0
    let ProductsNames = ""
    orders.map((resp)=>{
      Price = resp.Price * resp.quantity + Price
      ProductsNames = ProductsNames + resp.ProductName + " x " + resp.quantity.toString() + '\n\t'
    })
    setTotal(Price)
    setProductsNames(ProductsNames)
  },[orders])
 
  const handleDeliverd = () =>{
    let newOrder = {
      _id : order._id,
      Order : order.Order,
      IdUser: order.IdUser,
      NameUser: order.NameUser,
      State: "Delivered",
      Adress: order.Adress,
      Date: order.Date
    }
    editOrder(order._id, newOrder).then(()=>{
      updateOrderList()
    })
  }
  
  return (
    <tr>
       <td className="priority-table-user-1">
      {productsnames.split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </td>
      <td className="priority-table-user-2">{order.NameUser}</td>
      <td className="priority-table-user-3">{order.Adress}</td>
      <td className="priority-table-user-3">$ {total}</td>
      <td className="priority-table-user-4">
        {order.State === "Pending" ? (
           <Button
           className="btn-pending btn-options-order-width my-1 border-0"
           onClick={() => {
             handleDeliverd()
           }}
         >
           Deliver
         </Button>
        ) : ( <Button
          as={Link}
          className="btn-delivery text-white text-decoration-none me-2 my-1 btn-options-order-width border-0"
        >
          Delivered
        </Button>)}
       
       
      </td>
    </tr>
  );
};

export default ItemOrder;
