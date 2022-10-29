import React from 'react';
import { MdHomeFilled } from "react-icons/md";
import { Link } from 'react-router-dom';
import {RiSearchLine} from "react-icons/ri";
import {VscLibrary} from "react-icons/vsc";
import {AiOutlineClose} from "react-icons/ai"

const Sidebar = ({openSidebar, setOpenSidebar}) => {
    return (
        <div className={`z-50 h-full bg-slate-800 w-[15rem] max-w-[15rem]  p-5 rounded-lg text-gray-400 group ${!openSidebar && "-translate-x-[15rem] "} transition ease-in-out duration-500 fixed left-0 top-2 lg:static`}>
            
            <div className='flex items-center justify-between'>
                <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png' className='w-20' />
                <AiOutlineClose className='text-2xl lg:hidden' onClick={() => setOpenSidebar(false)} />
            </div>
            
            <div className='mt-8'>

                <Link to={"/home"}>           
                    <div className='flex items-center mt-4 hover:text-white'>
                        <MdHomeFilled className='text-gray-400 text-2xl ' />
                        <h2 className='font-[500] text-sm ml-4'>Home</h2>
                    </div>
                </Link>

                <Link to={"/search"}>           
                    <div className='flex items-center mt-4 hover:text-white'>
                        <RiSearchLine className='text-gray-400 text-2xl ' />
                        <h2 className='font-[500] text-sm ml-4'>Search</h2>
                    </div>
                </Link>

                <Link to={"/top"}>           
                    <div className='flex items-center mt-4 hover:text-white'>
                        <VscLibrary className='text-gray-400 text-2xl ' />
                        <h2 className='font-[500] text-sm ml-4'>Top</h2>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Sidebar