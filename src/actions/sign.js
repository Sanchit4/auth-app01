import types from "../types";
import store from "../store";
import { signupApi } from "../apis/auth";

const { dispatch } = store;

const signFetch = () => {
  dispatch({
    type: types.SIGNUP_LOADING,
    payload: { isFetching: true }
  });
};

const signSuccess = data => {
  dispatch({
    type: types.SIGNUP_SUCCESS,
    payload: data
  });
};

export function onSignupPress(data) {
  signFetch();
  return new Promise((resolve, reject) => {
    signupApi(data)
      .then(res => {
        signSuccess(data);
        resolve({ ...res });
      })
      .catch(error => {
        reject(error);
      });
  });
}
