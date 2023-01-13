import React from "react";
import Modal from "react-bootstrap/Modal";
import "../styled-components/pokemonDetail.css";
import BackgroundColor from "../utils/colorCard";

const PokemonDetail = ({ setShow, show, pokemonDetail }) => {
  console.log(pokemonDetail);
  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {pokemonDetail.name}{" "}
            <img src={pokemonDetail.sprites?.front_default} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ backgroundColor: `${BackgroundColor(pokemonDetail)}` }}
        >
          <h5>Type: {pokemonDetail.types?.[0].type.name}</h5>
          {pokemonDetail.abilities?.map((poke) => (
            <h5>abilitie: {poke.ability.name}</h5>
          ))}
          <h5>height: {pokemonDetail.height}</h5>
          <h5>weight: {pokemonDetail.weight}</h5>
          <h5>Move 1: {pokemonDetail.moves?.[0].move.name}</h5>
          <h5>Move 2: {pokemonDetail.moves?.[1].move.name}</h5>
          <h5>Move 3: {pokemonDetail.moves?.[2].move.name}</h5>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PokemonDetail;
