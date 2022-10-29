import React from 'react'

function Dropbox() {

  return (
    <div className='py-4 px-4 absolute top-[3rem] right-[1rem] bg-slate-700 border w-40 h-40 rounded-lg z-30'>
        <p className='px-4 py-2 hover:bg-slate-500 rounded-lg cursor-pointer'>Profile</p>
        <p className='px-4 py-2 hover:bg-slate-500 rounded-lg cursor-pointer'>Setting</p>
        <p className='px-4 py-2 hover:bg-slate-500 rounded-lg cursor-pointer'>Log Out</p>

    </div>
  )
}

export default Dropbox