export const ADD_WORD = "ADD_WORD";
export const DELETE_WORD = "DELETE_WORD";

export const addWord = (word: { en: string; es: string; pt: string }) => {
  return {
    type: ADD_WORD,
    payload: word,
  };
};

export const deleteWord = (word: string) => {
  return {
    type: DELETE_WORD,
    payload: word,
  };
};
