import { Product, SET_PRODUCTS } from "./productTypes";

export const setProducts = (products: Product[]) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
