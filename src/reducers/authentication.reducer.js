import {types} from '../fixtures/types';

const initialState = {
  dictionary: {
    alphabet: [],
    numbers: [],
  },
  dict_token: '',
  id_token: '',
  user: {
    id: '',
    name: '',
    lastname: '',
    roles: [],
  },
  isAuthenticated: false,
  isLoading: true,
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authnDictionaryReaded:
      return {
        ...state,
        dictionary: {
          alphabet: [...action.payload.dictionary.alphabet],
          numbers: [...action.payload.dictionary.numbers],
        },
        dict_token: action.payload.dict_token,
      };
    case types.authnLogIn:
      return {
        ...state,
        dictionary: {
          alphabet: initialState.dictionary.alphabet,
          numbers: initialState.dictionary.numbers,
        },
        dict_token: initialState.dict_token,
        id_token: action.payload.id_token,
        user: {
          id: action.payload.id,
          name: action.payload.name,
          lastname: action.payload.lastname,
          roles: [...action.payload.roles],
        },
        isAuthenticated: true,
      };
    case types.authnStopLoading:
      return {
        ...state,
        isLoading: false,
      };
    case types.authnLogOut:
      return {
        ...state,
        id_token: initialState.id_token,
        user: {...initialState.user},
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
