export interface Word {
    en: string;
    es: string;
    pt: string;
  }
  
  export interface DictionaryState {
    words: { [key: string]: Word };
  }
  
  const initialState: DictionaryState = {
    words: {},
  };
  
  const dictionaryReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "ADD_WORD":
        return {
          ...state,
          words: {
            ...state.words,
            [action.payload.en]: action.payload,
          },
        };
      case "DELETE_WORD":
        const newWords = { ...state.words };
        delete newWords[action.payload];
        return { ...state, words: newWords };
      default:
        return state;
    }
  };
  
  export default dictionaryReducer;
  