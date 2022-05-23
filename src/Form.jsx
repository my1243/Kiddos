import React from "react";

const Form = () => {
    return (
        <>
            <div className="h-128 min-w-screen relative">
                <img className="h-full object-top w-full object-cover" src="business-bg.png"/>
                <div className="h-full absolute top-0 left-24 bg-sky-400 w-35wid"><form className="p-12">
                    <h1 className="text-white text-4xl pb-4 font-bold">Request A Quote</h1>
                    <div className="text-slate-100 text-md pb-2 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                    <div className="py-6">
                        <input className="py-4 px-2 mr-4 placeholder-white bg-sky-400 border-b-2 border-sky-300 outline-none caret-white" type={'text'} placeholder="First Name"/>
                        <input className="py-4 px-2 placeholder-white bg-sky-400 border-b-2 border-sky-300 outline-none caret-white" type={'text'} placeholder="Last Name"/>
                    </div>
                    <div>
                        <input className="py-4 px-2 mr-4 placeholder-white bg-sky-400 border-b-2 border-sky-300 outline-none caret-white" type={'text'} placeholder="Enter your course"/>
                        <input className="py-4 px-2 placeholder-white bg-sky-400 border-b-2 border-sky-300 outline-none caret-white" type={'number'} placeholder="Phone"/>
                    </div>
                    <div className="flex items-center">
                        <textarea className="py-2 px-2 mr-4 placeholder-white bg-sky-400 border-b-2 border-sky-300 outline-none caret-white" cols={20} rows={2} placeholder="Message"/>
                        <button className="p-4 m-6 text-white rounded-full font-semibold bg-orange-400" type="submit">Request A Quote</button>
                    </div>
                </form></div>
            </div>
        </>
    );
}

export default Form;