import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-app-716f0-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData: any, token: string) => {
  const response = await axios.post(
    BACKEND_URL + `/expenses.json?auth=${token}`,
    expenseData
  );
  const id = response.data.name;
  return id;
};

export const fetchExpenses = async (token: string) => {
  const response = await axios.get(
    BACKEND_URL + `/expenses.json?auth=${token}`
  );

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpense = (id: string, expenseData: any, token: string) => {
  return axios.put(
    BACKEND_URL + `/expenses/${id}.json?auth=${token}`,
    expenseData
  );
};

export const deleteExpense = (id: string, token: string) => {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json?auth=${token}`);
};
