import * as types from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);

    dispatch({ type: types.AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: types.AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
