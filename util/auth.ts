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

  console.log("res ", response.data);
};

export const registerUser = async (email: string, password: string) => {
  await authenticated("signUp", email, password);
};

export const loginUser = async (email: string, password: string) => {
  await authenticated("signInWithPassword", email, password);
};
