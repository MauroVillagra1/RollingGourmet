import { Container, Button, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../../helpers/queries";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({setUserActive}) => {
  const {
    register,
    handleSubmit,
    formState:{errors}
  }= useForm();
  const navegacion = useNavigate();

  // esta es mi funcion la que pide loguear al usuario
  const onSubmit = (usuario)=>{
    login(usuario).then((respuesta)=>{
      if(respuesta.status === 200){
        Swal.fire(
          'Bienvenido '+ respuesta.usuario,
          'Ingresaste a la web cafecito',
          'success'
        )
        // guardar el usuario en el localstorage o sessionStorage;
        sessionStorage.setItem('userActive', JSON.stringify(respuesta));
        setUserActive(respuesta);
        navegacion('/administrador')
      }else{
        Swal.fire(
          'Ocurrio un error',
          'Email o password incorrecto',
          'error'
        )
      }
    })

  }

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
                placeholder="Ingrese un email"
                {
                  ...register('Email',{
                    required: 'El email es un dato obligatorio',
                    pattern:{
                      value:/^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:'El email debe cumplir con un formato valido como el siguiente mail@mail.com '
                    }
                  })
                }
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Password"
               {
                ...register('Password',{
                  required:'El password es un dato obligatorio',
                  pattern: {
                    value:/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: 'el password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                  }
                })
               }
              />
             <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Card.Text className="text-color"><Link to="/">No tienes una cuenta?</Link></Card.Text>
            <Card.Text className="text-color"><Link to="/">Has olvidado la contraseña?</Link></Card.Text>
            <Button variant="success" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;

