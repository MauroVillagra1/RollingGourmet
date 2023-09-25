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
  // const borrarProducto = () => {
  //   Swal.fire({
  //     title: "¿Esta seguro de eliminar el producto",
  //     text: "No se puede revertir este paso",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Borrar",
  //     cancelButtonText: "Cancelar",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       //realizar la consulta a la api
  //       borrarProductoAPI(_id).then((respuesta) => {
  //         if (respuesta.status === 200) {
  //           //actualizar el state productos o la tabla
  //           listarProductos().then((respuesta) => {
  //             console.log(respuesta);
  //             setProductos(respuesta);
  //           });

  //           Swal.fire(
  //             "Producto eliminado",
  //             "El producto fue correctamente borrado",
  //             "success"
  //           );
  //         } else {
  //           Swal.fire(
  //             "Se produjo un error",
  //             "Intente realizar esta operacion mas tarde",
  //             "error"
  //           );
  //         }
  //       });
  //     }
  //   });
  // };

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
