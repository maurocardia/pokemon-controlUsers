import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import "../styled-components/user.css";

const Users = ({ show, setShow }) => {
  const user = useSelector((state) => state.user);
  const [random, setRandom] = useState();
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/`)
      .then((res) => setRandom(res.data.results[0].picture.large));
  }, []);

  return (
    <div className="containerPersonalp">
      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h3>{user.name}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: `#E4F9FF` }}>
          <div className="containerPersonal">
            <div className="cardUser">
              <div className="containerImg">
                <img src={random} alt="" />
                <div className="complete"></div>
              </div>
              <div className="data">
                <h5>
                  {" "}
                  <span>Email: </span>
                  {user.email}
                </h5>
                <h5>
                  <span>Brthdate: </span>{" "}
                  {new Date(user.birthdate).toLocaleDateString()}
                </h5>
                <h5>
                  <span>Address: </span> {user.adress}
                </h5>
                <h5>
                  <span>City: </span> {user.city}
                </h5>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Users;
