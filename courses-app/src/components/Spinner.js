import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className='flex justify-center items-center flex-col space-x-2'>
      <div className="spinner"></div>
      <p className='text-3xl text-bgDark font-semibold'>Loading...</p>
    </div>
  );
}

export default Spinner
