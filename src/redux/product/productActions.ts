import { ProductItem, UPDATE_PRODUCTS } from "./productTypes";

export const updateProducts = (productList: ProductItem[]) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: productList,
  };
};
