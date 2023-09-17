import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemUser = ({ id, userName, email }) => {
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
