import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import "../styled-components/login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [viewPass, setViewPass] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_HOST}/usuarios/login`, data)
      .then((res) => {
        navigate(`/dashboard`);
        localStorage.setItem("token", res.data.data.token);
      });
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="containerLogin">
      <MDBContainer fluid className="p-3 my-5 h-custom containerForm">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://www.pngarts.com/files/3/Pokemon-Pikachu-Free-PNG-Image.png"
              class="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <form className="inputLogin" onSubmit={handleSubmit(onSubmit)}>
            <MDBCol col="4" md="6">
              {errors.email && (
                <span style={{ color: "tomato" }}>{errors.email.message}</span>
              )}
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                {...register("email", {
                  required: {
                    value: true,
                    message: "El campo es requerido",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "El formato no es correcto",
                  },
                })}
              />
              {errors.password && (
                <span style={{ color: "tomato" }}>
                  {errors.password.message}
                </span>
              )}
              <div className="imputPass">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="formControlLg"
                  type={viewPass ? "text" : "password"}
                  size="lg"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    minLength: {
                      value: 6,
                      message:
                        "La contraseña debe de tener al menos 6 caracteres",
                    },
                  })}
                />
                <div className="eye" onClick={() => setViewPass(!viewPass)}>
                  <AiFillEye />
                </div>
              </div>

              <div className="text-center text-md-start mt-4 pt-2">
                <MDBBtn className="mb-0 px-5" size="lg">
                  Login
                </MDBBtn>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{" "}
                  <a href="#/signup" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </MDBCol>
          </form>
          <div className="message">
            Create a new user or use: email: user@user.com - password: 12345678
          </div>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
