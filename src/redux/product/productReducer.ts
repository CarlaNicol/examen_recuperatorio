import { ProductItem, UPDATE_PRODUCTS } from "./productTypes";

export interface IProductState {
  productList: ProductItem[];
}

const initialProductState = {
  productList: [],
};

const productReducer = (
  state = initialProductState,
  action: {
    type: string;
    payload: ProductItem[];
  }
) => {
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      return {
        ...state,
        productList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
