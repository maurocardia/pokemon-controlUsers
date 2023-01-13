import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./Loading.slice";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    setPokemon: (state, action) => {
      const pokemon = action.payload;
      return pokemon;
    },
  },
});

export const getPokemonThunk = (guide) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon/${guide}`)
    .then((res) => dispatch(setPokemon(res.data.results)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
