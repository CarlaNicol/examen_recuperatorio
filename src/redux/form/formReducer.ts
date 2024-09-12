import { UPDATE_FORM_DATA, RETRIEVE_PASSWORD } from "./formTypes";

export interface IFormDetails {
  username: string;
  email: string;
}

export type IPasswordString = string;

const initialFormState = {
  formDetails: {
    username: "",
    email: "",
  },
  userPassword: "mod7ReactUSIP",
};

const formReducer = (
  state = initialFormState,
  action:
    | {
        type: "UPDATE_FORM_DATA";
        payload: IFormDetails;
      }
    | {
        type: "RETRIEVE_PASSWORD";
        payload: IPasswordString;
      }
) => {
  switch (action.type) {
    case UPDATE_FORM_DATA: {
      return {
        ...state,
        formDetails: {
          ...state.formDetails,
          ...action.payload,
        },
      };
    }
    case RETRIEVE_PASSWORD: {
      return {
        ...state,
        userPassword: action.payload,
      };
    }
    default:
      return state;
  }
};

export default formReducer;
