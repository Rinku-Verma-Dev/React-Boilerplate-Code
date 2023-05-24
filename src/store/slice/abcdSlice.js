import { createSlice } from "@reduxjs/toolkit";

export const abcdSlice = createSlice({
  name: "abcd",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      console.log("🚀 ~ file: abcdSlice.js:23 ~ action:", state, action);
      state.value += +action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = abcdSlice.actions;

export default abcdSlice.reducer;
