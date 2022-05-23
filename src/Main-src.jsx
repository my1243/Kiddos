import React from 'react';

const Main_src = () =>{
    return(
        <>
            <div className='relative'>
                <img className='w-screen h-256 opacity-90 brightness-75 object-cover' src='main-head.jpg'/>
                <div className='text-center text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='text-6xl w-128 font-bold'>Perfect Learned for Your Child</div>
                    <div><button className='p-4 m-4 rounded-full bg-orange-400'>Read More</button></div>
                </div>
            </div>
        </>
    );
}

export default Main_src;