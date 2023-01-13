import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HiUserCircle } from "react-icons/hi";
import "../styled-components/nav.css";
import { useSelector, useDispatch } from "react-redux";
import { getUserThunk } from "../store/slices/user.slice";
import { useNavigate } from "react-router-dom";
import Users from "./Users";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const [userLogin, setUserLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  const closeSession = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };

  return (
    <div className={localStorage.token ? "containerBar" : "closeBar"}>
      <Users setShow={setShow} show={show} />
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="navBarFont"
      >
        <Container>
          <br />
          <br />
          <h5 className="logUser" onClick={() => setUserLogin(!userLogin)}>
            <HiUserCircle />
          </h5>
          <Navbar.Brand className="nameBar" href="#/dashboard">
            {user.name}{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className={userLogin ? "togleNavOn" : "togleNavOff"}>
              <Nav className="me-auto">
                <Nav.Link onClick={() => setShow(true)}>
                  Datos personales
                </Nav.Link>
                <Nav.Link onClick={closeSession}>Cerrar sesion</Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
