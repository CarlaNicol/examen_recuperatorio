import { SET_MODULE_NAME } from "./defaultTypes";

export const updateModuleName = (moduleName: string) => {
  return {
    type: SET_MODULE_NAME,
    payload: moduleName,
  };
};

