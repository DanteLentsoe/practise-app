export type UserAuthInfo = {
  email: string;
  password: string;
};

export type ExpenseData = {
  data: any;
  id: string;
  description: string;
  amount: number;
  date: string | Date;
  token?: string;
};

export type RootStackParamList = {
  ManageExpense: undefined | { expenseId: string };
  ExpensesOverview: undefined;
  Login: undefined;
  Signup: undefined;
  RecentExpenses: undefined;
  AllExpenses: undefined;
};

export type Credentials = {
  email: string | boolean;
  confirmEmail: string | boolean;
  password: string | boolean;
  confirmPassword: string | boolean;
};

export type ReactChildrenType = {
  children: JSX.Element;
};
