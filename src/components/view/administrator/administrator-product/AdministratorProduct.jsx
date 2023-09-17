import { useState } from "react";
import "./../administrator-product/AdministratorProduct.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemProduct from "./ItemProduct";

const productsData = [
  {
    id: 1,
    product: "Hamburguer",
    price: 700,
    image:
      "https://img.freepik.com/foto-gratis/vista-frontal-hamburguesa-stand_141793-15542.jpg?size=626&ext=jpg",
    category: "Food",
  },
  {
    id: 2,
    product: "Water bottle",
    price: 500,
    image:
      "https://w7.pngwing.com/pngs/308/919/png-transparent-mineral-water-bottles-transparent-bottle-mineral-water-bottles-mineral-water-thumbnail.png",
    category: "Drink",
  },
];

const AdministratorProduct = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="bg-product-page">
      <section className="container ">
        <div className="d-flex justify-content-between align-items-center  pt-5">
          <h1 className=" text-white">Product Manager</h1>
          <Link
            className="btn-create text-white btn"
            to="/administrador/create"
          >
            Create Product
          </Link>
        </div>
        <div>
          <hr />
        </div>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th className="priority-1">ID</th>
              <th className="priority-2">Product</th>
              <th className="priority-3">Price</th>
              <th className="priority-4">Image</th>
              <th className="priority-5">Category</th>
              <th className="priority-6">Options</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, id) => (
              <ItemProduct
                key={id}
                {...product}
                setProducts={setProducts}
              ></ItemProduct>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministratorProduct;
