import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemProduct = ({ product, price, image, category, id }) => {
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
      <td className="priority-1">{id}</td>
      <td className="priority-2">{product}</td>
      <td className="priority-3">{price}</td>
      <td className="priority-4">
        <Image className="img-table-product" src={image} rounded fluid />
      </td>
      <td className="priority-5">{category}</td>
      <td className="priority-6 ">
        <Button
          as={Link}
          to={`/administrador/editar/id`}
          className="btn-edit me-2 my-1 text-black btn-options-width border-0"
        >
          Edit
        </Button>
        <Button
          className="btn-delete btn-options-width my-1 border-0"
          onClick={() => {
            console.log("borrar producto");
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ItemProduct;
