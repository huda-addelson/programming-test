import { configureStore } from '@reduxjs/toolkit';
import postReducer from './post/postSlice';
import loginReducer from './login/loginSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    login: loginReducer,
  },
});
