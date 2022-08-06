import axios from "axios";

const API_KEY = "AIzaSyAKG5qM2RraRjJnt8NSmanmNotEfPWJ8jg";
export const authenticated = async (
  mode: string,
  email: string,
  password: string
) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response?.data?.idToken as string;

  return token;
};

export const registerUser = (email: string, password: string) => {
  return authenticated("signUp", email, password);
};

export const loginUser = (email: string, password: string) => {
  return authenticated("signInWithPassword", email, password);
};
