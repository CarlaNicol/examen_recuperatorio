import { combineReducers } from "redux";
import defaultReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  default: defaultReducer,
  product: productReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
