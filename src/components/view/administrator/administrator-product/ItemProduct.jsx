import { Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { deleteProductAPI, listProducts } from "../../../helpers/queries";

const ItemProduct = ({ product, setProducts }) => {
  const deleteProduct = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el producto",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductAPI(product._id).then((resp) => {
          if (resp.status === 200) {
            listProducts().then((resp) => {
              setProducts(resp);
            });
            Swal.fire(
              "Product deleted",
              "Product was successfully deleted",
              "success"
            );
          } else {
            Swal.fire("An error occurred", "Try this operation later", "error");
          }
        });
      }
    });
  };

  return (
    <tr>
      <td className="priority-2">{product.NameProduct}</td>
      <td className="priority-3">{product.Price}</td>
      <td className="priority-4">
        <Image
          className="img-table-product"
          src={product.Image}
          rounded
          fluid
        />
      </td>
      <td className="priority-5">{product.Details}</td>
      <td className="priority-6 ">
        <Button
          as={NavLink}
          to={`/administrator/product/edit/${product._id}`}
          className="btn-edit me-2 my-1 text-black btn-options-width border-0"
        >
          Edit
        </Button>
        <Button
          className="btn-delete btn-options-width my-1 border-0"
          onClick={deleteProduct}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ItemProduct;
