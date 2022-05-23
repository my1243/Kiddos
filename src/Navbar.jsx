import React from 'react';
import './index.css';

const Navbar =() =>{
    return (
        <>
        <div className={`h-14`}>
            <h1 className='absolute top-2 left-20 text-3xl font-bold'><a href='#'>Kiddos</a></h1>
            <ul className='absolute top-4 right-40'>
                <li className='inline p-6 text-xm'><a href='#'>Home</a></li>
                <li className='inline p-6 text-xm'><a href='#'>About</a></li>
                <li className='inline p-6 text-xm'><a href='#'>Teacher</a></li>
                <li className='inline p-6 text-xm'><a href='#'>Courses</a></li>
                <li className='inline p-6 text-xm'><a href='#'>Pricing</a></li>
                <li className='inline p-6 text-xm'><a href='#'>Blog</a></li>
                <li className='inline p-6 text-xm'><a href='#'>Contact</a></li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;