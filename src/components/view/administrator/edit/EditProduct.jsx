import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  InputGroup,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  editProduct,
  getProduct,
  listCategories,
} from "../../../helpers/queries";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const navigation = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [categories2, setCategories2] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoriesComboBox, setCategoriesComboBox] = useState("");
  const [editLoad, setEditLoad] = useState([]);
  const [categoriesLoad, setCategoriesLoad] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    let x = [];
    setValue("NameProduct", editLoad.NameProduct);
    setValue("Price", editLoad.Price);
    setValue("Details", editLoad.Details);
    setValue("Image", editLoad.Image);
    setValue("Stock", editLoad.Stock);

    categoriesLoad.forEach((resp2) => {
      categories2.forEach((cate2) => {
        if (cate2._id.toString() === resp2) {
          x.push(cate2);
        }
      });
    });
    setSelectedCategories(x);
    x.map((asd) => {
      setCategories(categories.filter((category) => category._id !== asd._id));
    });
  }, [categories2, editLoad, categoriesLoad]);

  useEffect(() => {
    getProduct(id).then((resp) => {
      setEditLoad(resp);
      setCategoriesLoad(resp.CategoriesID);
    });
    listCategories().then((categories) => {
      setCategories(categories);
      setCategories2(categories);
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    const categories = [];
    selectedCategories.map((category) => {
      categories.push(category._id);
    });

    data["CategoriesID"] = categories;
    data["State"] = "Visible";
    data["Price"] = parseInt(data["Price"]);
    data["Stock"] = parseInt(data["Stock"]);

    editProduct(id, data)
      .then((resp) => {
        if (resp.status === 200) {
          Swal.fire(
            "Saved product",
            "Your product was stored correctly",
            "success"
          );
          navigation("/administrator/product");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "There was a Error",
          "Error trying to load the product",
          "error"
        );
      });
  };

  function handleCategoryChange(event) {
    const selectedCategoryId = event.target.value;
    const selectedCategory = categories.find(
      (category) => category._id === selectedCategoryId
    );
    setSelectedCategory(selectedCategory);
    setCategoriesComboBox(selectedCategoryId);
  }

  function handleAddCategory() {
    if (
      selectedCategory._id &&
      !selectedCategories.includes(selectedCategory)
    ) {
      setSelectedCategories([...selectedCategories, selectedCategory]);
      setCategories(
        categories.filter((category) => category !== selectedCategory)
      );
      setSelectedCategory("");
    }
  }

  function handleRemoveCategory(category) {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
    setCategories([...categories, category]);
  }

  return (
    <div className="create_product_container text-light">
      <div className="title_create_product text-light">Edit Products</div>
      <div className="body_create_product">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Product name</FormLabel>
            <FormControl
              type="text"
              placeholder="Example: Big Mac"
              {...register("NameProduct", {
                required: "this information is mandatory",
                pattern: {
                  value: /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s]*$/,
                  message: "You must enter only valid letters and numbers",
                },
                minLength: {
                  value: 2,
                  message: "You must enter at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "You must enter a maximum of 50 characters",
                },
              })}
            ></FormControl>
            <Form.Text className="text-danger">
              {errors.NameProduct?.message}
            </Form.Text>
          </FormGroup>
          <FormGroup>
            <FormLabel className="mt-2">Product Price</FormLabel>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                type="number"
                step="0.01"
                placeholder="Example: $500"
                {...register("Price", {
                  required: "this information is mandatory",
                  validate: (value) => {
                    const parsedValue = parseFloat(value);
                    if (isNaN(parsedValue)) {
                      return "Please enter a valid number";
                    }
                    if (parsedValue <= 100 || parsedValue > 100000) {
                      return "The price must be between 100 and 100000";
                    }
                    return true;
                  },
                })}
              ></FormControl>
            </InputGroup>
            <Form.Text className="text-danger">
              {errors.Price?.message}
            </Form.Text>
          </FormGroup>
          <FormGroup>
            <FormLabel className="mt-2">Product Details</FormLabel>
            <FormControl
              type="text"
              placeholder="Example: This is a perfect meal for dinner."
              {...register("Details", {
                required: "this information is mandatory",
                pattern: {
                  value: /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ\s.,!¡?'"()-]*$/,
                  message: "You must enter only valid letters and numbers",
                },
                minLength: {
                  value: 20,
                  message: "You must enter at least 20 characters",
                },
                maxLength: {
                  value: 500,
                  message: "You must enter a maximum of 500 characters",
                },
              })}
            ></FormControl>
            <Form.Text className="text-danger">
              {errors.Details?.message}
            </Form.Text>
          </FormGroup>
          <FormGroup>
            <FormLabel className="mt-2">Product Image</FormLabel>
            <FormControl
              type="text"
              placeholder="https://example.com/image.jpg"
              {...register("Image", {
                required: "The image url is required",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                  message: "You must enter a valid URL",
                },
              })}
            ></FormControl>
            <Form.Text className="text-danger">
              {errors.Image?.message}
            </Form.Text>
          </FormGroup>
          <FormGroup>
            <FormLabel className="mt-2">Product Stock</FormLabel>
            <InputGroup>
              <FormControl
                type="number"
                placeholder="Example: 10"
                {...register("Stock", {
                  validate: (value) => {
                    const parsedValue = parseFloat(value);
                    if (isNaN(parsedValue)) {
                      return "Please enter a valid number";
                    }
                    if (parsedValue < 1 || parsedValue > 100) {
                      return "The stock must be between 1 and 100";
                    }
                    return true;
                  },
                })}
              ></FormControl>
            </InputGroup>
            <Form.Text className="text-danger">
              {errors.Stock?.message}
            </Form.Text>
          </FormGroup>
          <FormGroup>
            <FormLabel className="mt-2">Categories</FormLabel>
            <div className="d-flex">
              <FormSelect
                className="w-50"
                value={categoriesComboBox}
                onChange={(event) => handleCategoryChange(event)}
              >
                <option value="">Select an option</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.Category}
                  </option>
                ))}
              </FormSelect>
              <Button onClick={handleAddCategory}>Add category</Button>
            </div>
          </FormGroup>

          <FormGroup>
            <FormLabel>Selected Categories</FormLabel>
            <div className="selected-categories d-flex text-light flex-wrap mb-5">
              {selectedCategories.map((category) => (
                <div
                  key={category._id}
                  className="selected-category mb-1 mx-3 p-2"
                >
                  {category.Category}
                  <Button
                    className="remove_button_category"
                    onClick={() => handleRemoveCategory(category)}
                  >
                    X
                  </Button>
                </div>
              ))}
            </div>
          </FormGroup>

          <Button type="submit">Edit Product</Button>
        </Form>
      </div>
    </div>
  );
}

export default EditProduct;
