import { SET_MODULE_NAME } from "./defaultTypes";

const initialModuleState = {
  moduleName: "Desarrollo Front End con React v5",
};

const moduleReducer = (
  state = initialModuleState,
  action: {
    type: string;
    payload: string;
  }
) => {
  switch (action.type) {
    case SET_MODULE_NAME: {
      return {
        ...state,
        moduleName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default moduleReducer;
