import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styled-components/CardPokemon.css";
import BackgroundColor from "../utils/colorCard";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/slices/Loading.slice";

const CardPokemon = ({ url }) => {
  const dispatch = useDispatch();
  const [pokemonDetail, setPokemonDetails] = useState();

  useEffect(() => {
    dispatch(setIsLoading(true));
    axios
      .get(url)
      .then((res) => setPokemonDetails(res.data))
      .catch((error) => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)));
  }, [url]);

  return (
    <div
      className="containerCardPokemon"
      style={{ backgroundColor: `${BackgroundColor(pokemonDetail)}` }}
    >
      <img
        src={pokemonDetail?.sprites?.other.dream_world.front_default}
        alt=""
      />
      <div className="containerwight">
        <div className="weight">weight: {pokemonDetail?.weight}</div>
      </div>

      <div className="details">
        <h3
          className="titlePokemon"
          style={{ color: `${BackgroundColor(pokemonDetail)}` }}
        >
          {pokemonDetail?.name}
        </h3>
        <p className="movesText"># {pokemonDetail?.moves[0].move.name}</p>
        <p className="movesText moveEnd">
          # {pokemonDetail?.moves[1].move.name}
        </p>
      </div>
    </div>
  );
};

export default CardPokemon;
