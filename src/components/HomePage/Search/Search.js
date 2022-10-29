import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { letSearchASong } from '../../../api_call/spotify_api';
import { setIsPlaying, setPlayingSong, setSongs } from '../../../redux/slice/spotifySlice';

function Search() {

    const { access_token, user } = useSelector(state => state.auth);
    const [searchKey, setSearchKey] = useState("");
    const dispatch = useDispatch();

    const searchSong = async () => {
        const response = await letSearchASong(access_token, searchKey);
        dispatch(setSongs(response.tracks));
    }
    const { songs, playingSong } = useSelector(state => state.spotify);
    const convertMinute = (ms) => {
        const minute = Math.floor(ms / 60000);

        const second = ((ms % 60000) / 1000).toFixed(0);
        return minute + ":" + (second < 10 ? '0' : '') + second;
    }

    const dubleClickPlaySong = (song) => {
        dispatch(setPlayingSong(song));
        dispatch(setIsPlaying());
    }

    return (
        <div className='mt-4'>
            <h1 className='text-lg font-semibold'>Search Song</h1>
            <div className='flex items-center ml-4 mt-4'>
                <FiSearch className='text-lg mr-4' onClick={searchSong} />
                <input placeholder='What is you want to listen today ?'
                    className='border bg-transparent px-4 py-2 rounded-lg pl-6' value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />

            </div>

            <div className='mt-4'>
                <table className='w-full '>
                    {
                        songs && (
                            songs.items.map((song, index) => (
                                <tr className='hover:bg-gray-500 ' key={index} onDoubleClick={() => dubleClickPlaySong(song)}>
                                    <td className='flex items-center px-4 py-2 '>
                                        <p className='mr-4'>{index + 1}</p>
                                        <img src={song.album.images[0].url}
                                            className='w-12'
                                        />
                                        <div className='ml-4'>
                                            <p className={`${playingSong.name === song.name && "text-green-500"}`}>{song.name}</p>
                                            <p className='text-sm text-gray-400'>{song.artists[0].name}</p>
                                        </div>
                                    </td>
                                    <td>{song.album.release_date}</td>
                                    <td>{convertMinute(song.duration_ms)}</td>
                                </tr>
                            ))
                        )
                    }



                </table>
            </div>
        </div>
    )
}

export default Search