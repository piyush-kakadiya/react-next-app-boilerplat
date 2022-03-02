export interface User {
  name: string;
  email: string;
};

export type UserState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
};
