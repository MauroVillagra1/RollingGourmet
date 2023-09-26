import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { Card, Container } from "react-bootstrap";
import { useEffect } from "react";
import { listCategories, listProducts } from "../../helpers/queries";
import { useState } from "react";

const ProductDetail = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState([])
  const [categoriesID, setCategoriesID] = useState([])
  const [categories, setCategories] = useState([])
  const [categoriesSearch, setCategoriesSearch] = useState([])

  const { id } = useParams()
  useEffect(()=>{
    listProducts().then((resp)=>{
      setProducts(resp)
    })
    listCategories().then((resp)=>{
      setCategories(resp)
    })
  },[])
  useEffect(()=>{
    products.map((resp)=>{
      if(resp._id.toString() === id){
        setProduct(resp)
        setCategoriesID(resp.CategoriesID)
      }
    })
  },[products])

  useEffect(()=>{
    let arrayCategory = []
    categories.map((resp)=>{
     categoriesID.map((resp2)=>{
      if(resp._id.toString()===resp2)
      {
        arrayCategory.push(resp)
       
      }
     })
    })
    setCategoriesSearch(arrayCategory)
  },[categoriesID, categories])


  return (
    <>
      <div className="detail d-flex flex-column justify-content-center align-items-center">
        <div className="my-5 d-flex flex-column justify-content-center align-items-center w-75">
          <Card
            style={{ width: "100%" }}
            className="d-flex flex-lg-row flex-column card_title my-3 "
          >
            <div className="image_background w-lg-50 w-100 d-flex">
              <Card.Img
                src={product.Image}
                className="img-fluid customBgImg "
              />
            </div>
            <div className="w-lg-50 w-100 body_background">
              <Card.Body>
                <Card.Title className="title fw-bold fs-1 mb-4 pb-2 text-light">
                  {product.NameProduct}
                </Card.Title>
                <Card.Text className="title fw-bold fs-1 mb-4 pb-2 text_price">
                  $ {product.Price}
                </Card.Text>
                <div className="container  mt-5 text-center fw-bold">
                  <div className="row  d-flex flex-md-row flex-column">
                    {categoriesSearch.map((resp)=>(
                      <div key={resp._id} className="col m-2 py-2 border-0 rounded">
                      <h2 className="title fw-bold fs-2 mb-4 pb-2 text-light">
                        {resp.Category}
                      </h2>
                  </div>
                    ))}
                    
                  </div>
                </div>
              </Card.Body>
            </div>
          </Card>

          <Card
            style={{ width: "100%", height: "12rem" }}
            className="description d-flex card_title"
          >
            <Card.Title className="p-2 title fw-bold fs-1 text-light">
              Description
            </Card.Title>
            <Card.Body className="text">
            {product.Details} 
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
