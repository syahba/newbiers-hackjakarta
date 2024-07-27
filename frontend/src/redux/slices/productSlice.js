import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {}
  },
  reducers: {
    setAllProducts(state, action) {
      state.products = action.payload;
    },
    setDetailProduct(state, action) {
      state.product = action.payload;
    }
  }
});

export const { setAllProducts, setDetailProduct } = productSlice.actions;

export const getAllProducts = (search) => async (dispatch) => {
  try {
    const { data: { data } } = await axios({
      method: 'get',
      url: 'http://172.16.59.65:8000/api/product',
      params: search,
      responseType: 'json'
    });

    return dispatch(setAllProducts(data));
  } catch (err) {
    console.error(err);
    return dispatch(setAllProducts([]));
  };
};

export default productSlice.reducer;