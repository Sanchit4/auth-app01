import types from "../types";

const initialState = {
  isLoading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_LOADING: {
      return { ...state, loading: true };
    }

    case types.SIGNUP_SUCCESS: {
      const data = action.payload.data;
      return {
        ...state,
        loading: false,
        user: data
      };
    }

    default:
      break;
  }

  return {
    ...state
  };
}
