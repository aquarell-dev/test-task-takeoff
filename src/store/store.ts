import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer } from './user/user.slice';
import { contactsApi } from './contacts/contacts.api';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(contactsApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
