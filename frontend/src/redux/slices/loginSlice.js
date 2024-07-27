import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    role: ''
  },
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
    }
  }
});

export const { setRole } = loginSlice.actions;

export const login = (isMerchant) => {
  const role = isMerchant ? 'merchant' : 'customer';
  return setRole(role);
};

export default loginSlice.reducer;