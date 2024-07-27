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

export const getAllProducts = (search = '') => async (dispatch) => {
  try {
    const { data: { data } } = await axios({
      method: 'get',
      url: `http://172.16.59.65:8000/api/product?search=${search}`,
      responseType: 'json'
    });

    data.forEach(v => {
      v.price = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(v.price).slice(0, -3);
    });

    return dispatch(setAllProducts(data));
  } catch (err) {
    return dispatch(setAllProducts([]));
  };
};

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const { data: { data } } = await axios({
      method: 'get',
      url: `http://172.16.59.65:8000/api/product/${id}`,
      responseType: 'json'
    });

    return dispatch(setDetailProduct(data));
  } catch (err) {
    return dispatch(setDetailProduct({}));
  };
};

export default productSlice.reducer;