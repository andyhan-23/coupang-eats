import { createSlice } from "@reduxjs/toolkit";

const vendor = createSlice({
  name: "vendor",
  initialState: {
    store1: null,
  },
  reducers: {
    setQueryVendor: (state, action) => {
      state.store1 = action.payload;
    },
  },
});

export const { setQueryVendor } = vendor.actions;

export default vendor.reducer;
