import React, { useEffect, useRef, useState } from 'react';
import { BiShuffle, BiSkipNext, BiRepeat } from "react-icons/bi";
import { AiFillStepBackward, AiOutlineSound} from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import ReactAudioPlayer from 'react-audio-player';
import { useSelector } from 'react-redux';

const Footer = () => {
    const {isPlaying, playingSong} = useSelector(state => state.spotify);
    const playingRef = useRef();

    useEffect(() => {
        if(isPlaying && playingSong){
            playingRef.current.src=playingSong.preview_url
            playingRef.current.play();
        }
    },[isPlaying, playingSong]);
   
    return (
        <div className= 'px-2 md:px-4 lg:px-8 border-t text-white absolute bottom-0 left-0 h-[5rem] w-full border-slate-500 flex items-center justify-between'>
            <div className='flex items-center  w-full h-full'>
                <img src={playingSong.album.images[0].url}
                    className='w-14 hidden lg:block'
                />
                <div className='lg:ml-4'>
                    <h1 className='font-bold tetx-sm'>{playingSong.name}</h1>
                    <p className='text-sm'>{playingSong.artists[0].name}</p>
                </div>
            </div>

            <div className=' w-full flex flex-col justify-center items-center h-full '>
                {/* <div className='flex items-center'>
                    <BiShuffle className='text-2xl mx-1 lg:mx-2' />
                    <AiFillStepBackward className='text-2xl mx-1 lg:mx-2' />
                    <BsFillPlayFill className='text-4xl mx-1 lg:mx-2 rounded-full p-2 bg-green-500' />
                    <BiSkipNext className='text-2xl mx-1 lg:mx-2' />
                    <BiRepeat className='text-2xl mx-1 lg:mx-2' />
                </div> */}

                {
                    playingSong ? <audio controls ref={playingRef}></audio> : <p>No Song To Play</p>
                }
            </div>

            <div className=' w-full  flex justify-end h-full items-center'>
                <AiOutlineSound className='text-2xl' />
            </div>
        </div>
    )
}

export default Footer