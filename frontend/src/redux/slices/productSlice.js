import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
    url: '',
    ingredient: {}
  },
  reducers: {
    setAllProducts(state, action) {
      state.products = action.payload;
    },
    setDetailProduct(state, action) {
      state.product = action.payload;
    },
    setImageUrl(state, action) {
      state.url = action.payload;
    },
    setIngredient(state, action) {
      state.ingredient = action.payload;
    }
  }
});

export const { setAllProducts, setDetailProduct, setImageUrl, setIngredient } = productSlice.actions;

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

export const uploadImage = (image) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    const { data: { data: { url } } } = await axios({
      method: 'post',
      url: `http://172.16.59.65:8000/api/upload`,
      data: formData,
      responseType: 'json'
    });

    return dispatch(setImageUrl(`http://172.16.59.65:8000${url}`));
  } catch (err) {
    return dispatch(setImageUrl(''));
  };
};

export const generateIngredient = (name) => async (dispatch) => {
  try {
    const { data: { data } } = await axios({
      method: 'post',
      url: `http://172.16.59.65:8000/api/product/generate/ingredient-nutriscore`,
      data: name,
      responseType: 'json'
    });

    return dispatch(setIngredient(data));
  } catch (err) {
    return dispatch(setIngredient({}));
  };
};

export default productSlice.reducer;