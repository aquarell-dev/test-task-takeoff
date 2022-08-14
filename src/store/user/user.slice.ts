import { IUser, IUserSlice } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import userService from './user.services';

const LS_US_KEY = 'ruk';

const lsValue = userService.getValueFromLocalStorageByKey(LS_US_KEY);

const initialState: IUserSlice = {
  id: lsValue?.id,
  login: lsValue?.login,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<IUser>) => {
      state.id = action.payload.id;
      state.login = action.payload.login;
      localStorage.setItem(LS_US_KEY, JSON.stringify(state));
    },
    logOut: (state) => {
      state.login = undefined;
      state.id = undefined;
      localStorage.removeItem(LS_US_KEY);
    }
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
