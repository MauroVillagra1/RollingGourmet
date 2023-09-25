
import { Container, Button, Form, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { login } from "../../helpers/queries";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({setUsuarioActivo}) => {
  const {
    register,
    handleSubmit,
    formState:{errors}
  }= useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario)=>{
    console.log('aqui agrego mi logica')
    console.log(usuario)
    login(usuario).then((respuesta)=>{
      console.log(respuesta)
      if(respuesta.status === 200){
        Swal.fire(
          'Bienvenido '+ respuesta.usuario,
          'Ingresaste a la web cafecito',
          'success'
        )
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(respuesta));
        setUsuarioActivo(respuesta);
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
                  ...register('email',{
                    required: 'El email es un dato obligatorio',
                    pattern:{
                      value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
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
                type="password"
                placeholder="Password"
               {
                ...register('password',{
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

