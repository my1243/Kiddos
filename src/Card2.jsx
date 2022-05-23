import React from 'react';

const Card2 = (props) => {
    return(
        <>
            <div className='flex items-center'>
                <div className='flex justify-center items-center w-20 h-20 m-4 rounded-full bg-sky-400'><img className='w-12 h-12' src={props.imgsrc}/></div>
                <div className='m-4 w-64'>
                    <h2 className='text-xl text-slate-800 font-semibold py-2'>{props.title}</h2>
                    <div className='text-md text-slate-600'>{props.content}</div>
                </div>
            </div>
        </>
    );
}

export default Card2;