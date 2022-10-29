import React from 'react';
import { FiSearch } from "react-icons/fi";

function Top() {

    const songs = [1, 2, 3, 4, 4,4,,4,33,,33,3]

    return (
        <div className='mt-4'>
            <h1 className='text-lg font-semibold'>Top Song</h1>
            <div className='mt-4'>
                <table className='w-full '>
                    {
                        songs.map(() => (
                            <tr className='hover:bg-gray-500 '>
                                <td className='flex items-center px-4 py-2 '>
                                    <p className='mr-4'>1</p>
                                    <img src='https://static.vecteezy.com/system/resources/previews/002/896/742/original/sad-boy-depressed-boy-looking-lonely-free-vector.jpg'
                                        className='w-12'
                                    />
                                    <p className='ml-4'>Title Song</p>
                                </td>
                                <td>2000</td>
                                <td>2:98</td>
                            </tr>
                        ))
                    }



                </table>
            </div>
        </div>
    )
}

export default Top