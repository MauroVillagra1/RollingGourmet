import { Container, Button, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../../helpers/queries.js";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUserActive, reloadNav }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (user) => {
    login(user).then((resp) => {
      if (resp.status === 200) {
        Swal.fire(
          "Welcome " + resp.userName,
          "You entered the rolling gourmet web",
          "success"
        );
        navegacion("/");
        reloadNav();
        sessionStorage.setItem("userActive", JSON.stringify(resp));
        setUserActive(resp);
      } else {
        Swal.fire("An error occurred", resp.message, "error");
      }
    });
  };

  return (
    <Container className="login">
      <Card className="my-5">
        <Card.Header as="h5">Rolling Gourmet</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter an email"
                maxLength={100}
                {...register("Email", {
                  required: "Email is mandatory information",
                  pattern: {
                    value:
                      /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "The email must comply with a valid format such as the following mail@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.Email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Password"
                maxLength={100}
                {...register("Password", {
                  required: "The password is mandatory information",
                  pattern: {
                    value: /^[a-zA-Z0-9]*$/,
                    message:
                      "The password must be between 8 and 16 characters, at least one digit, at least one lowercase letter and at least one uppercase letter.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.Password?.message}
              </Form.Text>
            </Form.Group>
            <Card.Text className="text-color ">
              <Link className="text-decoration-none text-white" to="/">
                You do not have an account?
              </Link>
            </Card.Text>
            <Card.Text className="text-color">
              <Link className="text-decoration-none text-white" to="/">
                Have you forgotten the password?
              </Link>
            </Card.Text>
            <Button variant="success" type="submit">
              Get into
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
