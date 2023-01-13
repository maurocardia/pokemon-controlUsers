import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../styled-components/signUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  //control del formulario de registro

  const onSubmit = (data) => {
    if (data.password === data.repeatPass) {
      axios
        .post(`${process.env.REACT_APP_HOST}/usuarios/signup`, data)
        .then((res) => {
          alert(`usuario ${data.name} creado, por favor inicie sesion`);
          navigate("/");
        })
        .catch((error) => {
          alert(`${error.response.data.message}`);
          console.log(error);
        });
    } else {
      alert("Passwords do not match");
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <Form.Control
                    type="name"
                    placeholder="name"
                    {...register("name")}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <Form.Control
                    type="email"
                    placeholder="email"
                    {...register("email")}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <Form.Control
                    type="password"
                    placeholder="Repeat password"
                    {...register("repeatPass")}
                  />
                </div>

                <MDBBtn className="mb-4 buttonReg" size="sm">
                  Register
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <div className="containerimg">
                  <img
                    src="https://img.freepik.com/vector-premium/interfaz-usuario-registro-o-registro-usuarios-utilizan-inicio-sesion-contrasena-seguros-recopilacion-datos-linea_566886-2046.jpg?w=2000"
                    alt=""
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </form>
  );
};

export default SignUp;
