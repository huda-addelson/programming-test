import React from 'react';
import Button from '../Components/Button';
import UserInput from '../Components/UserInput';
import { users } from '../Utils/dataUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../Components/Toast';
import { BiLogIn } from 'react-icons/bi';
import Layout from '../Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleLogin,
  setPassword,
  setUsername,
} from '../Redux/login/loginSlice';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username == username && user.password == password
    );
    if (user) {
      dispatch(handleLogin(user));
      dispatch(setUsername(''));
      dispatch(setPassword(''));
      Toast({ message: `Selamat Datang ${username}`, type: 'success' });
      setTimeout(() => {
        navigate('/posting');
      }, 2000);
    } else {
      Toast({ message: 'Maaf username atau password salah', type: 'warn' });
      dispatch(setUsername(''));
      dispatch(setPassword(''));
    }
  };

  return (
    <Layout>
      <div className='flex items-center justify-center min-h-screen'>
        <form
          onSubmit={onSubmit}
          className='w-full sm:w-9/12 lg:w-2/5 bg-white p-10 sm:p-14 md:p-20 flex flex-col rounded-lg'>
          <div className='flex flex-col text-xs self-end'>
            <span>Username : khoirulhuda</span>
            <span>Password : 123456</span>
          </div>
          <UserInput
            title='Username'
            type='text'
            name='username'
            value={username}
            className='mb-10 mt-6'
            handlerChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <ToastContainer />
          <UserInput
            title='Password'
            type='password'
            name='password'
            value={password}
            handlerChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <Button
            text='Login'
            type='submit'
            icon={<BiLogIn className='w-5 h-5' />}
            className='mt-5 self-center px-10 py-4'
          />
        </form>
      </div>
    </Layout>
  );
}
