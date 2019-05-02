import types from "../types";
import store from "../store";
import { loginApi, signupApi } from "../apis/auth";
import { toast } from "react-toastify";

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
        resolve({ ...res });
      })
      .catch(err => {
        toast.error(err.response.data.message || "Something Went Wrong !!");
        reject(err);
      });
  });
}
