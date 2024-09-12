import { combineReducers } from "redux";
import moduleReducer from "./default/defaultReducer";
import productReducer from "./product/productReducer";
import formReducer from "./form/formReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
  module: moduleReducer,
  product: productReducer,
  form: formReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;
