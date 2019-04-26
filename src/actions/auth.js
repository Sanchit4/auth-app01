import types from "../types";
import store from "../store";
import { loginApi } from "../apis/auth";
const { dispatch } = store;

const authFetch = () => {
  dispatch({
    type: types.AUTH_LOADING,
    payload: { isFetching: true }
  });
};

const loginSuccess = data => {
  dispatch({
    type: types.AUTH_SUCCESS,
    payload: data
  });
};

export function onLoginPress(data) {
  authFetch();
  return new Promise((resolve, reject) => {
    loginApi(data)
      .then(res => {
        loginSuccess(res);
        resolve({ ...res, xyz: "sam" });
      })
      .catch(error => {
        reject(error);
      });
  });
}
