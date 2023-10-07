import { useEffect, useState } from "react";
import "./AdministratorUser.css";
import { Table } from "react-bootstrap";
import ItemUser from "./ItemUser";
import { listUsers } from "../../../helpers/queries";

const AdministratorUser = () => {
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(0)

  useEffect(()=>{
    listUsers().then((resp)=>{
      setUsers(resp)
    })
  },[reload])

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
              <th className="priority-table-user-2">UserName</th>
              <th className="priority-table-user-3">Mail</th>
              <th className="priority-table-user-4">Options</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ItemUser key={user._id} user={user} setUsers={setUsers} reload={reload} setReload={setReload}></ItemUser>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministratorUser;
