import "./SignUp.css";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createUsers } from "../../helpers/queries";
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
    user["ProfilePicture"] =
      "https://res.cloudinary.com/dhe7vivfw/image/upload/v1694745378/Rolling%20Gourmet/IMG%20USER/avatardefault_92824_son9pd.png";
    user["Role"] = "User";
    user["State"] = "Active";
    if (user.Password === user.RepeatPassword) {
      createUsers(user).then((resp) => {
        if (resp.status === 201) {
          Swal.fire("Welcome!", "You are successfully registered!", "success");
          navigator("/");
        } else {
          Swal.fire(
            "A system error occurred! ",
            "Error," + resp.status,
            "error"
          );
        }
      });
    } else {
      Swal.fire(
        "A system error occurred! ",
        "Error, Passwords do not match",
        "error"
      );
    }
  };

  return (
    <>
      <div className="singUp d-flex flex-lg-row flex-column justify-content-center align-items-center">
        <div className="my-5 d-flex flex-lg-row flex-column justify-content-center align-items-center w-75">
          <div className="pt-3">
            <div className="mx-3 my-2 py-2">
              <img
                src="https://res.cloudinary.com/dhe7vivfw/image/upload/v1696641327/Rolling%20Gourmet/IMG-SIGNUP/signup_unlgc3.webp"
                className="rounded-3"
                width="105%"
                alt="image.webp"
              />
            </div>
          </div>
        </div>

        <div className="m-2 container-lg d-flex flex-column justify-content-center align-items-center">
          <Form onSubmit={handleSubmit(onSubmit)} className="form-body-signup">
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
                {...register("Name", {
                  required: "username is mandatory information",
                  pattern: {
                    value: /^[a-zA-Z0-9_]+$/,
                    message:
                      "Username should be between 8 and 16 characters, at least one digit, al least one lowercase and at least one uppercase",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.Name?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="text mt-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("Email", {
                  required: "Email is mandatory information",
                  pattern: {
                    value:
                      /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "The email must cumply with a valid format such as the following email@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.Email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mt-3 text mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: "The password is mandatory information",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "Password should be between 8 and 16 characters, at least one digit, at least one lowercase and at least one uppercase",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.Password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mt-3 text mb-3" controlId="">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="RepeatPassword"
                {...register("RepeatPassword", {
                  required: "The password is mandatory information",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "Password should be between 8 and 16 characters, at least one digit, at least one lowercase and at least one uppercase",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.RepeatPassword?.message}
              </Form.Text>
            </Form.Group>
            <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
              <div>
                <Button
                  type="submit"
                  className="text border-0 fs-3 button-createaccount text-center"
                >
                  Create Account
                </Button>
              </div>
              <div className="mt-3 d-flex flex-lg-row justify-content-center align-items-center w-100 register-gmail">
                {" "}
                <Button
                  type="submit"
                  className="text text-start fs-lg-5 border-0 fs-4 d-flex justify-content-center align-items-center button-gmail"
                >
                  <img
                    className="img-gmail"
                    src="https://brandeps.com/logo-download/G/Gmail-logo-vector-01.svg"
                    alt="logoGmail"
                  />
                  <p> Sing up with Gmail</p>
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
