import React from 'react';
import { BiLogIn } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Button from '../../Components/Button';
import { handleLogOut } from '../../Redux/login/loginSlice';
import { resetPost } from '../../Redux/post/postSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const hover = `hover:text-black hover:bg-[#cfd9e2] rounded-md px-3 py-2 transition-all duration-200 text-white`;
  const user = useSelector((state) => state.login.user);
  console.log(user, 'userrrr');

  const Hover = ({ isActive }) => {
    return isActive ? 'text-black px-3 py-2 bg-[#cfd9e2] rounded-md' : hover;
  };

  const logout = () => {
    dispatch(handleLogOut());
    dispatch(resetPost());
  };

  const menus = [
    {
      id: 1,
      name: 'Home',
      url: '/',
    },
    {
      id: 2,
      name: 'About',
      url: '/about',
    },
    {
      id: 3,
      name: 'Posting',
      url: '/posting',
    },
  ];

  return (
    <div className='py-3 bg-[#2fc7a3] bg-opacity-45'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex gap-x-1'>
          {menus.map((menu) => (
            <NavLink to={menu.url} key={menu.id} className={Hover}>
              {menu.name}
            </NavLink>
          ))}
        </div>
        {user ? (
          <Link to='/login'>
            <Button
              text='Log Out'
              icon={<BiLogIn className='w-5 h-5' />}
              handlerClick={logout}
            />
          </Link>
        ) : (
          <Link to='/login'>
            <Button text='Log In' icon={<BiLogIn className='w-5 h-5' />} />
          </Link>
        )}
      </div>
    </div>
  );
}
