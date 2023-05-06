import React from 'react';
import Button from '../Components/Button';
import Title from '../Components/Title';
import UserInput from '../Components/UserInput';
import Layout from '../Layout/Layout';
import { BsFillFilePostFill } from 'react-icons/bs';
import ListPosting from '../Components/Posting/ListPosting';
import { useDispatch, useSelector } from 'react-redux';
import {
  addPost,
  setContent,
  setTitle,
  updatePost,
} from '../Redux/post/postSlice';
import Toast from '../Components/Toast';
import { ToastContainer } from 'react-toastify';

export default function Posting() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.post.title);
  const content = useSelector((state) => state.post.content);
  const post = useSelector((state) => state.post.post);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      isPosting: false,
    };
    dispatch(addPost(newPost));
    Toast({ message: 'Sukses Create Post' });
    dispatch(setTitle(''));
    dispatch(setContent(''));
  };

  const handlerCheckPosting = (e) => {
    const postId = e.target.value;
    const updatedPosting = post.map((post) => {
      if (post.id === Number(postId)) {
        return {
          ...post,
          isPosting: e.target.checked,
        };
      }
      return post;
    });
    dispatch(updatePost(updatedPosting));
  };

  return (
    <Layout>
      <div className='min-h-screen container mx-auto py-10 bg-[#cfd9e2]'>
        <div className='flex flex-col gap-y-16'>
          <form onSubmit={handlerSubmit} className='max-w-md'>
            <ToastContainer />
            <Title text='Posting' />
            <div className='flex flex-col gap-y-10 mt-10 w-full'>
              <UserInput
                title='Title'
                value={title}
                handlerChange={(e) => dispatch(setTitle(e.target.value))}
              />
              <textarea
                className='w-full h-40 px-4 py-3 text-base bg-transparent outline-none border-2 border-black focus:border-[#009688] rounded-md'
                placeholder='Masukkan content'
                value={content}
                onChange={(e) =>
                  dispatch(setContent(e.target.value))
                }></textarea>
            </div>
            <Button
              type='submit'
              text='Posting'
              className='mt-5 self-end'
              icon={<BsFillFilePostFill />}
            />
          </form>
          <div className='flex flex-col gap-y-10'>
            <Title text='List Postingan' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              {post.map((post) => (
                <div key={post.id}>
                  <ListPosting
                    data={post}
                    handlerChangeCheck={handlerCheckPosting}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
