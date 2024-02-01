import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {
    meaning: false,
    CO2: false,
    temp: false,
  },
  reducers: {
    setStatus: (state, action) => {
      state.meaning = action.payload;
    },

    setStatusCO2: (state, action) => {
      state.CO2 = action.payload;
    },

    setStatusTemp: (state, action) => {
      state.temp = action.payload;
    },
  },
});

export const { setStatus, setStatusCO2, setStatusTemp } = statusSlice.actions;
export default statusSlice.reducer;
