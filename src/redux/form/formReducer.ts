import { SET_FORM_DATA, GET_PASSWORD } from "./formTypes";

export interface IFormData {
  username: string;
  email: string;
}

export type IPassword = string;

const initialState = {
  formData: {
    username: "",
    email: "",
  },
  password: "mod7ReactUSIP",
};

const formReducer = (
  state = initialState,
  action:
    | {
        type: "SET_FORM_DATA";
        payload: IFormData;
      }
    | {
        type: "GET_PASSWORD";
        payload: IPassword;
      }
) => {
  switch (action.type) {
    case SET_FORM_DATA: {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    }
    case GET_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
