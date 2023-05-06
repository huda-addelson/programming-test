import { createSlice } from '@reduxjs/toolkit';

const loginStorage = localStorage.getItem('user');

const initialState = {
  user: JSON.parse(loginStorage),
  username: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    handleLogin(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    handleLogOut(state) {
      state.user = localStorage.removeItem('user');
    },
  },
});

export const { setUsername, setPassword, handleLogin, handleLogOut } =
  loginSlice.actions;
export default loginSlice.reducer;
