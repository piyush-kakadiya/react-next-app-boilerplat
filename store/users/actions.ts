import type { AppDispatch } from '../';
import { User } from './types';
import { setUser } from './';

export const getUser = (user: User) => (dispatch: AppDispatch) => {
  try {
    dispatch(setUser(user));
  } catch (error) {}
};
