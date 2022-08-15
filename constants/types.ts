export type UserAuthInfo = {
  email: string;
  password: string;
};

export type ExpenseData = {
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
