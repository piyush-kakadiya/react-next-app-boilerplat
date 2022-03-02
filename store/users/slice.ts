import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './types';

const initialState: UserState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});