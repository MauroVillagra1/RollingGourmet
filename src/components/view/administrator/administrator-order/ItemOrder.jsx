import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemOrder = ({ id, product, email }) => {
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
      <td className="priority-table-user-2">{product}</td>
      <td className="priority-table-user-3">{email}</td>
      <td className="priority-table-user-4">
        <Button
          as={Link}
          to={`/administrador/editar/id`}
          className="btn-delivery text-white text-decoration-none me-2 my-1 btn-options-order-width border-0"
        >
          Delivered
        </Button>
        <Button
          className="btn-pending btn-options-order-width my-1 border-0"
          onClick={() => {
            console.log("borrar producto");
          }}
        >
          Pending
        </Button>
      </td>
    </tr>
  );
};

export default ItemOrder;
