import types from "../types";

const initialState = {
  loading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.AUTH_LOADING: {
      return { ...state, loading: true };
    }
    case types.AUTH_SUCCESS: {
      const data = action.payload.data;
      return { ...state, loading: false, user: data };
    }
  }

  return { ...state };
}
