import React from 'react';
import './index.css';
import Navbar from './Navbar'
import Main_src from './Main-src';
import Main_card from './Main-card';
import Main_card_data from './Data';
import Component1 from './Component1';
import Teacher_comp from './Teacher-comp';
import Component2 from './Component2';
import Component3 from './Component3';
import Form from './Form';
import Component4 from './Component4';
import Component5 from './Component5';
import Footer from './Footer';

const App = () =>{
    return(
        <>
            <Navbar/>
            <Main_src/>
            <div className='flex'>
                {Main_card_data.map((val) => {
                    return (
                        <Main_card 
                        title={val.Title}
                        content={val.content}
                        imgsrc={val.imgsrc}
                        color={val.col} />            
                    );
                })}
            </div>
            <Component1/>
            <Teacher_comp/>
            <Component2/>
            <Component3/>
            <Form/>
            <Component4/>
            <Component5/>
            <Footer/>
        </>
    );
}

export default App;