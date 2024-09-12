import { IFormDetails } from "./formReducer";
import { UPDATE_FORM_DATA } from "./formTypes";

export const storeFormDetails = (formDetails: IFormDetails) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: formDetails,
  };
};
