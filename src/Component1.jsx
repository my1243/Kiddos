import React from 'react';
import Card2 from './Card2';
import { card2_data } from './Data';

const Component1 = () =>{
    return(
        <>
            <div className='flex'>
                <div className='w-55wid pl-24 pt-16'>
                    <h1 className='text-3xl py-5'>What We Offer</h1>
                    <div className='text-slate-600 pr-6'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</div>
                    <div className='grid grid-cols-2 py-4 pr-4'>
                        { card2_data.map((val) => {
                            return(
                                <Card2 
                                imgsrc={val.imgsrc}
                                title={val.Title}
                                content={val.content}
                                />
                            )})
                        }
                    </div>
                </div>
                <div className='bg-neutral-100 w-35wid px-8  pt-16'>
                    <h1 className='text-4xl w-80 pb-6'>Welcome to Kiddos Learning School</h1>
                    <p className='pb-4 text-lg text-slate-500'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>

                    <p className='text-lg text-slate-500'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. And if she hasn’t been rewritten, then they are still using her.</p>
                    <button className='p-4 my-4 text-white rounded-full font-semibold bg-orange-400'>Read More</button>
                </div>
            </div>
            <div className='relative'>
                <img className='w-screen h-96 object-cover' src="pic2.png"/>
                <div className='flex flex-row items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='p-6 w-50wid'>
                        <h1 className='text-4xl text-white font-bold pb-4'>Teaching Your Child Some Good Manners</h1>
                        <div className='text-sm text-white'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
                    </div>
                    <button className='p-4 my-4 w-40 text-white rounded-full font-semibold bg-orange-400'>Take a Course</button>
                </div>
            </div>
        </>
    );
}

export default Component1;