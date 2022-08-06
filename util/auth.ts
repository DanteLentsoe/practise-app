import axios from "axios";

const API_KEY = "AIzaSyAKG5qM2RraRjJnt8NSmanmNotEfPWJ8jg";

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  console.log(response);
};
