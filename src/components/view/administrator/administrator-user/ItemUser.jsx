import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { editUser, listUsers } from "../../../helpers/queries";

const ItemUser = ({ user, setUsers, reload, setReload }) => {
  const handleSuspend = () => {
    let newUser = {
      Name: user.Name,
      Email: user.Email,
      Password: user.Password,
      State: "Suspended",
      ProfilePicture: user.ProfilePicture,
      Role: user.Role,
    };
    editUser(user._id, newUser);
    setReload(reload + 1);
  };

  useEffect(() => {
    listUsers().then((resp) => {
      setUsers(resp);
    });
  }, [reload]);

  const handleUnSuspend = () => {
    let newUser = {
      Name: user.Name,
      Email: user.Email,
      Password: user.Password,
      State: "Active",
      ProfilePicture: user.ProfilePicture,
      Role: user.Role,
    };
    editUser(user._id, newUser);
    setReload(reload + 1);
  };
  return (
    <>
      {user.Role === "Admin" ? (
        <tr className="d-none">
          <td className="priority-table-user-1">{user._id}</td>
          <td className="priority-table-user-2">{user.Name}</td>
          <td className="priority-table-user-3">{user.Email}</td>
          <td className="priority-table-user-4">
            {user.State === "Suspended" ? (
              <Button
                className="btn btn-unsuspend  border-0 me-2 my-1 btn-options-user-width"
                onClick={() => {
                  handleUnSuspend();
                }}
              >
                Unsuspend
              </Button>
            ) : (
              <Button
                className="btn-suspend btn-options-user-width my-1 border-0"
                onClick={() => {
                  handleSuspend();
                }}
              >
                Suspend
              </Button>
            )}
          </td>
        </tr>
      ) : (
        <tr>
          <td className="priority-table-user-1">{user._id}</td>
          <td className="priority-table-user-2">{user.Name}</td>
          <td className="priority-table-user-3">{user.Email}</td>
          <td className="priority-table-user-4">
            {user.State === "Suspended" ? (
              <Button
                className="btn btn-unsuspend  border-0 me-2 my-1 btn-options-user-width"
                onClick={() => {
                  handleUnSuspend();
                }}
              >
                Unsuspend
              </Button>
            ) : (
              <Button
                className="btn-suspend btn-options-user-width my-1 border-0"
                onClick={() => {
                  handleSuspend();
                }}
              >
                Suspend
              </Button>
            )}
          </td>
        </tr>
      )}
    </>
  );
};

export default ItemUser;
