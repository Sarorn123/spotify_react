import React, { useEffect } from 'react';
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlaylists } from '../../../api_call/spotify_api';
import { setPlaylist } from '../../../redux/slice/spotifySlice';

const Home = () => {

    const dispatch = useDispatch();
    const getPlaylist = async () => {
        const playlist = await getAllPlaylists(access_token);
        dispatch(setPlaylist(playlist));
    }

    useEffect(() => {
        getPlaylist();
    }, []);

    const { access_token } = useSelector(state => state.auth);
    const { playlists } = useSelector(state => state.spotify);

    console.log(playlists);

    const playlist = [1, 2, 3, 4, 2,]
    const topmixes = [1, 2, 3, 4, 2, 3, 4, 5,]

    const img = "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSvL_1iX9rOGeZZGV6Wk5h3baW-rpBlPGT0AudpnThwuxE4g3rEpqD79T2DX86kpuMXs5FXYWF1kzmJMyg"

    return (
        <div className='overflow-auto'>
            <h1 className='mt-4 text-lg lg:text-2xl font-bold'>Good Morning</h1>

            <div className=' mt-4 grid gap-4 grid-cols-2 md:grid-cols-3'>
                {
                    playlists && (
                        playlists?.items.map((playlist, index) => (
                            <div className='h-20  bg-gray-600 overflow-hidden rounded-lg flex items-center justify-between group' key={index}>
                                <div className='flex items-center'>
                                    <img src={playlist.images[0]?.url} className="w-20 lg:w-32 object-cover" />
                                    <h1 className='ml-4 text-lg lg:text-xl font-semibold'>{playlist.name}</h1>
                                </div>
                                <div className='bg-green-500 h-14 w-14 rounded-full  justify-center items-center mr-4 shadow-md opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 hidden lg:flex'>
                                    <BsFillPlayFill className='text-4xl' />
                                </div>
                            </div>
                        ))
                    )
                }
            </div>

            <h1 className='mt-4 text-lg lg:text-2xl font-bold'>Your Top Mix</h1>

            <div className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6'>


                {
                    topmixes.map(() => (
                        <div className='h-80 p-4 cursor-pointer rounded-lg hover:bg-gray-800 transition ease-in-out duration-300 relative group'>
                            <img src={img} className="h-[60%] object-cover w-full rounded-lg" />

                            <div className='mt-4'>
                                <h1 className='font-bold'>Major Lazer</h1>
                                <p className='text-slate-500 mt-2 text-sm'>MO, Diplo, And More</p>
                            </div>

                            <div className='bg-green-500 h-12 w-12 rounded-full z-20 justify-center flex items-center mr-4 shadow-md transition duration-300 ease-in-out group-hover:opacity-100 lg:flex absolute right-0 bottom-20 opacity-0 translate-y-4 group-hover:translate-y-0'>
                                <BsFillPlayFill className='text-4xl' />
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Home