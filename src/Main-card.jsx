import React from 'react';

const Main_card = (props) =>{
    return(
        <>
            <div className={`relative w-25wid h-64 ${props.color}`}>
                <h1 className='text-2xl font-semibold text-white px-4 pt-16 text-center'>{props.title}</h1>
                <div className='text-slate-200 p-4 text-center text-lg'>{props.content}</div>
                <div className='flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white'><img className='w-16 h-16' src={props.imgsrc}/></div>
            </div>
        </>
    );
}

export default Main_card;