import { IFormData } from "./formReducer";
import { SET_FORM_DATA } from "./formTypes";

export const saveFormData = (formData: IFormData) => {
  return {
    type: SET_FORM_DATA,
    payload: formData,
  };
};
