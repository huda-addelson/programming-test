import { createSlice } from '@reduxjs/toolkit';

const postStorage = localStorage.getItem('posts');

const initialState = {
  post: JSON.parse(postStorage) || [],
  title: '',
  content: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action) {
      state.post.push(action.payload);
      localStorage.setItem('posts', JSON.stringify(state.post));
    },
    updatePost(state, action) {
      state.post = action.payload;
      localStorage.setItem('posts', JSON.stringify(state.post));
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setContent(state, action) {
      state.content = action.payload;
    },
    resetPost(state) {
      state.post = localStorage.removeItem('posts') || [];
    },
  },
});

export const { addPost, setTitle, setContent, updatePost, resetPost } =
  postSlice.actions;
export default postSlice.reducer;
