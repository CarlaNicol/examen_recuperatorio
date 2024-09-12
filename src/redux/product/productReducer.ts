import { Product, SET_PRODUCTS } from "./productTypes";

export interface IProductReducer {
  PRODUCTS: Product[];
}

const initialState = {
  PRODUCTS: [],
};

const productReducer = (
  state = initialState,
  action: {
    type: string;
    payload: Product[];
  }
) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        PRODUCTS: action.payload,
      };
    }
    default:
      return state;
  }
};

export default productReducer;
