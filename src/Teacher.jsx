import React from 'react';

const Teacher = (props) => {
    return(
        <>
            <div className='w-72 pb-4 m-6 shadow-lg'>
                <div className='w-72 h-72 overflow-hidden'><img className='h-full w-full object-top object-cover' src={props.imgsrc} /></div>
                <h1 className='text-center py-2 text-2xl font-semibold'>{props.name}</h1>
                <h2 className='text-center pb-1 tracking-widest text-slate-600'>{props.desig}</h2>
                <div className='px-2 text-slate-800 text-center leading-6 tracking-wider'>{props.about}</div>
            </div>
        </>
    );
}

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

const Card3 = (props) => {
    return(
        <>
            <div className='flex flex-row shadow-md rounded-l-full rounded-r-3xl overflow-hidden'>
                <div className='w-55wid bg-gray-100'><img className='rounded-full object-cover h-full' src={props.imgsrc}/></div>
                <div className='bg-gray-100 p-4 rounded-r-3xl'>
                    <h1 className='text-sky-500 pb-4 text-2xl'>{props.title}</h1>
                    <h3><span className='text-orange-500'>Class Time:</span> 9:00am - 10:00am</h3>
                    <div className='text-slate-600 pt-4 pb-6 text-md tracking-wider leading-6'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</div>
                </div>
            </div>
        </>
    );
}

const Card4 = (props) => {
    return(
        <>
            <div className='carousel-item active relative float-left w-full'>
            <div className='pt-8 flex items-center justify-center'>
                <div className='w-32 h-32 m-6'><img className='w-full h-full object-cover object-top rounded-full' src={props.imgsrc}/></div>
                <div className='relative w-25wid'>
                    <h1 className='px-4 pb-4 text-lg text-slate-600'>{props.content}</h1>
                    <h1 className='px-4 text-xl text-slate-800'>{props.name}</h1>
                    <h2 className='px-4 pb-2 text-lg text-sky-500'>{props.relation}</h2>
                    <div className='absolute -top-12 left-2 opacity-10'><img src="https://img.icons8.com/ios/100/000000/quote-left.png"/></div>
                </div>
            </div>
            </div>
        </>
    );
}

const Card5 = (props) => {
    return(
        <>
            <div className='p-6 w-128 bg-slate-100 m-4'>
                <h1 className='text-center pb-2 text-2xl font-semibold'>{props.title}</h1>
                <h1 className='text-center pb-2'><span className='text-3xl font-bold text-sky-500'>{props.price}</span> /5mos</h1>
                <div className='h-48'><img className='h-full' src={props.imgsrc}/></div>
                <div className='py-2 text-slate-600 text-center'>{props.content}</div>
                <div className='flex justify-center'><button className={`p-4 my-4 text-white rounded-full font-semibold ${props.color}`}>Take A Course</button></div>
            </div>
        </>
    );
}

const Card6 = (props) => {
    return(
        <>
            <div className='p-6 m-2 bg-gray-200'>
                <div className='relative w-96 h-72'>
                    <img className='h-full w-full object-cover' src={props.imgsrc}/>
                    <div className='absolute bottom-0 left-0 w-16 bg-purple-600 font-semibold text-white text-center p-1'>{props.date}</div>
                </div>
                <div className='p-4'>
                    <h1 className='text-2xl hover:text-sky-500 pb-4'>{props.title}</h1>
                    <div className='text-slate-600 text-md tracking-wider leading-8'>{props.content}</div>
                    <div className='flex justify-between'>
                        <button className={`py-2 px-4 my-4 text-white rounded-full font-semibold bg-orange-500`}>Read More</button>
                        <div className='py-2 my-4'>
                            <span className='text-sky-500 text-lg m-4'>Admin</span>
                            <span><img className='inline' src="https://img.icons8.com/material-outlined/24/000000/comments--v1.png"/>  {props.com_count}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Teacher;
export {Card2 ,Card3, Card4, Card5, Card6};