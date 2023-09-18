
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkAdmin: [],
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.checkAdmin = action.payload;
    },
  },
});

export const { setAdmin } = adminSlice.actions;

export const selectAdmin = (state) => state.admin.checkAdmin;

export default adminSlice.reducer;
