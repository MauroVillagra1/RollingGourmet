import { useEffect, useState } from "react";
import "./AdministratorOrder.css";
import { Table } from "react-bootstrap";
import ItemOrder from "./ItemOrder";
import { listOrders } from "../../../helpers/queries";





const AdministratorOrder = () => {
  const [users, setUsers] = useState([]);
const [orders, setOrders] = useState([]);
  useEffect(()=>{
    listOrders().then((resp)=>{
      setOrders(resp.reverse())
    })
  },[])

  const updateOrderList = () => {
    listOrders().then((resp) => {
      setOrders(resp.reverse());
    });
  };

  return (
    <div className="bg-order-page">
      <section className="container ">
        <div className="d-flex justify-content-between align-items-center  pt-5">
          <h1 className=" text-white">Order Manager</h1>
        </div>
        <div>
          <hr />
        </div>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className="priority-table-user-1">Products</th>
              <th className="priority-table-user-2">User</th>
              <th className="priority-table-user-3">Adress</th>
              <th className="priority-table-user-4">Total</th>
              <th className="priority-table-user-5">Options</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <ItemOrder key={order._id} order={order} setProducts={setUsers} updateOrderList={updateOrderList}></ItemOrder>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministratorOrder;
