import { useState } from "react";
import "./AdministratorUser.css";
import { Table } from "react-bootstrap";
import ItemUser from "./ItemUser";

const usersData = [
  {
    id: 1,
    userName: "Pedro",
    email: "Pedro@gmail.com",
  },
  {
    id: 2,
    userName: "Juan",
    email: "Juan@gmail.com",
  },
];

const AdministratorUser = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-user-page">
      <section className="container ">
        <div className="d-flex justify-content-between align-items-center  pt-5">
          <h1 className=" text-white">User Manager</h1>
        </div>
        <div>
          <hr />
        </div>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className="priority-table-user-1">ID</th>
              <th className="priority-table-user-2">UserName</th>
              <th className="priority-table-user-3">Mail</th>
              <th className="priority-table-user-4">Options</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, id) => (
              <ItemUser key={id} {...user} setProducts={setUsers}></ItemUser>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministratorUser;
