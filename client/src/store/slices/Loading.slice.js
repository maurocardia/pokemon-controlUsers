import { createSlice } from "@reduxjs/toolkit";

export const loadinSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      const loading = action.payload;
      return loading;
    },
  },
});

export const { setIsLoading } = loadinSlice.actions;

export default loadinSlice.reducer;
