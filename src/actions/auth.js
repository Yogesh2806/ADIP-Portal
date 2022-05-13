import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, navigate, setError) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    navigate("/onboarding");
  } catch (error) {
    console.log(error);
    setError(error.response.data.message);
  }
};

export const signup = (formData, navigate, setError) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    navigate("/onboarding");
  } catch (error) {
    console.log(error);
    setError(error.response.data.message);
  }
};
