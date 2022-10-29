import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Navbar from './Navbar'
import Search from './Search/Search';
import Sidebar from './Sidebar'
import Top from './Top/Top';

function getWindowWidth() {
    const innerwidth = window.innerWidth;
    return innerwidth;
}


const HomePage = () => {

    const [width, setWidth] = useState(getWindowWidth());
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        function handleWindowResize() {
            setWidth(getWindowWidth());
        }

        window.addEventListener("resize", handleWindowResize);


        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, []);

    useEffect(() => {
        if (width < 1024) {
            setOpenSidebar(false)
        } else {
            setOpenSidebar(true)
        }
    }, [width]);

    return (
        <div className='h-screen p-2 bg-black text-white flex flex-col overflow-y-hidden justify-between'>

            <div className='max-w-full h-full flex gap-2 overflow-hidden mb-[5rem]'>
                <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                <div className='w-full'>
                    <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
                    <div className='overflow-auto h-full pb-[5rem]'>
                        <Routes>

                            <Route path='/home' element={<Home />} />
                            <Route path='/search' element={<Search />} />
                            <Route path='/top' element={<Top />} />

                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomePage