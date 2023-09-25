import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemUser = ({ id, userName, email }) => {
  return (
    <tr>
      <td className="priority-table-user-1">{id}</td>
      <td className="priority-table-user-2">{userName}</td>
      <td className="priority-table-user-3">{email}</td>
      <td className="priority-table-user-4">
        <Button
          as={Link}
          to={`/administrador/editar/id`}
          className="btn btn-unsuspend  border-0 me-2 my-1 btn-options-user-width"
        >
          Unsuspend
        </Button>
        <Button
          className="btn-suspend btn-options-user-width my-1 border-0"
          onClick={() => {
            console.log("borrar producto");
          }}
        >
          Suspend
        </Button>
      </td>
    </tr>
  );
};

export default ItemUser;
