import "./SignUp.css";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registerList } from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUserInLine }) => {
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    console.log(user);
    registerList(user).then((response) => {
      console.log(response);
      if (response) {
        Swal.fire(
          "Welcome! " + response.nameUser,
          "You are successfully registered!",
          "success"
        );
        sessionStorage.setItem("registeredUser", JSON.stringify(response));
        setUserInLine(response);
        navigator("/");
      } else {
        Swal.fire(
          "A system error occurred! ",
          "You're already signed in!",
          "error"
        );
      }
    });
  };

  return (
    <>
      <div className="singUp d-flex flex-lg-row flex-column justify-content-center align-items-center">
        <div className="my-5 d-flex flex-lg-row flex-column justify-content-center align-items-center w-75">
          <div className="pt-3">
            <div className="mx-3 my-2 py-2">
              <img
                src="image.webp"
                className="rounded-3"
                width="105%"
                alt="image.webp"
              />
            </div>
          </div>
        </div>

        <div className="m-2 container-lg d-flex flex-column justify-content-center align-items-center">
          <Form onSubmit={handleSubmit(onSubmit)} style={{ width: "65%" }}>
            {" "}
            <div className="pb-5">
              <h1 className="text-light title">Sing Up</h1>
              <p className="text">
                If you don't have an account register, you can
                <span className="orange"> Register here</span>
              </p>
            </div>
            <Form.Group className="text mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                {...register("nameUser", {
                  required: "username is mandatory information",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "Username should be between 8 and 16 characters, at least one digit, al least one lowercase and at least one uppercase",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nameUser?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="text mt-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is mandatory information",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "The email must cumply with a valid format such as the following email@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="text mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "The password is mandatory information",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "Password should be between 8 and 16 characters, at least one digit, at least one lowercase and at least one uppercase",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
              <div>
                <Button
                  style={{ background: "#008000", color: "#fff" }}
                  type="submit"
                  className="text border-0 fs-3"
                >
                  Create Account
                </Button>
              </div>
              <div className="mt-3 d-flex flex-lg-row justify-content-center align-items-center w-100">
                {" "}
                <Button
                  style={{
                    background: "#6F779D",
                    color: "#fff",
                    width: "60%",
                  }}
                  type="submit"
                  className="text text-start border-0 fs-4 d-flex justify-content-center align-items-center"
                >
                  {" "}
                  <img
                    src="https://brandeps.com/logo-download/G/Gmail-logo-vector-01.svg"
                    alt="logoGmail"
                    style={{
                      background: "#6F779D",
                      margin: ".5rem",
                      maxWidth: "12%",
                    }}
                  />
                  Sing up with Gmail
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
