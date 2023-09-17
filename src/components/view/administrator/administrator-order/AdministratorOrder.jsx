import { useState } from "react";
import "./AdministratorOrder.css";
import { Table } from "react-bootstrap";
import ItemOrder from "./ItemOrder";

const usersData = [
  {
    id: 1,
    product: "Hamburguer",
    email: "Pedro@gmail.com",
  },
  {
    id: 2,
    product: "Water Bottle",
    email: "Juan@gmail.com",
  },
];

const AdministratorOrder = () => {
  const [users, setUsers] = useState([]);

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
              <th className="priority-table-user-1">ID</th>
              <th className="priority-table-user-2">Product</th>
              <th className="priority-table-user-3">Mail</th>
              <th className="priority-table-user-4">Options</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, id) => (
              <ItemOrder key={id} {...user} setProducts={setUsers}></ItemOrder>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministratorOrder;
