import { SET_NAME_MODULE } from "./defaultTypes";

export const setNameModule = (nameModule: string) => {
  return {
    type: SET_NAME_MODULE,
    payload: nameModule,
  };
};
