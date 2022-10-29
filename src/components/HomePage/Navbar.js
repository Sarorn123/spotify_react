import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBackIosNew, } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import Dropbox from '../utils/Dropbox';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../api_call/auth_api';
import { setUser } from '../../redux/slice/authSlice';

const Navbar = ({ setOpenSidebar, openSidebar }) => {

  const dispatch = useDispatch();

  const { access_token, user } = useSelector(state => state.auth);

  const getUserLoggedIn = async () => {
    const getUser = await getCurrentUser(access_token);
    dispatch(setUser(getUser));
  }

  useEffect(() => {
    getUserLoggedIn();
  }, []);

  console.log("user", user)

  const [toggleDropbox, setToggleDropbox] = useState(false);

  return (
    <div className='relative bg-slate-800 w-full h-[5rem] flex items-center px-4 justify-between rounded-lg'>

      {toggleDropbox && <Dropbox />}

      <div className='flex items-center text-white'>
        <RiMenu4Line className='text-2xl lg:hidden' onClick={() => setOpenSidebar(!openSidebar)} />
        <MdOutlineArrowBackIosNew className='bg-gray-700 rounded-full h-10 w-10 p-2 mx-4' />
        <GrNext className='bg-gray-700 rounded-full h-10 w-10 p-2' />
      </div>

      <div className='flex items-center bg-black p-1 rounded-full cursor-pointer' onClick={() => setToggleDropbox(pre => !pre)}>
        <FaRegUserCircle className='bg-gray-400 p-1 rounded-full h-7 w-7' />
        <h2 className='ml-4 font-bold'>{user?.display_name}</h2>
        <IoMdArrowDropdown className='ml-2' />
      </div>

    </div>
  )
}

export default Navbar