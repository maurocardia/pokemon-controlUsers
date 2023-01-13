import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./slices/Loading.slice";
import pokemonSlice from "./slices/pokemonSlice";
import userSlice from "./slices/user.slice";

export default configureStore({
  reducer: {
    loading: LoadingSlice,
    user: userSlice,
    pokemon: pokemonSlice,
  },
});
