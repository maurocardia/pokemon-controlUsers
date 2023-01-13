import React from "react";
import { Spinner } from "react-bootstrap";
import "../styled-components/loadinScreen.css";

const Loading = () => {
  return (
    <div className="containerSpinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
