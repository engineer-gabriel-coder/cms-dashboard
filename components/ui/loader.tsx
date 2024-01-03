"use client";

import { ClipLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <ClipLoader color='#3498db' size={50} />
      <p className=' text-lg'>Please wait...</p>
    </div>
  );
};
