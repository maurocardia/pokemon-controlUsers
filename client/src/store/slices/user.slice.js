import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./Loading.slice";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      return user;
    },
  },
});

export const getUserThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`${process.env.REACT_APP_HOST}/usuarios`, getConfig())
    .then((res) => dispatch(setUser(res.data.data.userid)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
