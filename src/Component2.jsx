import React from "react";
import { Card3 } from "./Teacher";
import { Card3_data } from "./Data";

const Component2 = () =>{
    return (
        <>
            <div className="px-32 pb-16">
                <h1 className="text-center text-5xl pb-8 font-bold"><span className="text-violet-600">Our</span> <span className="text-amber-500">Courses</span></h1>
                <p className="text-center px-64 text-lg text-slate-600">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                <div className="grid grid-cols-2 gap-16 py-12 justify-center">
                    {
                        Card3_data.map((val) => {
                            return(
                                <Card3 
                                imgsrc={val.imgsrc}
                                title={val.title}
                                />
                            );
                        })
                    }
                </div>
            </div>

            <div className="relative">
                <div className="h-screen min-w-screen"><img className="w-full h-full opacity-80 brightness-100 contrast-150 saturate-150" src="pencil_bg.jfif"/></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-6xl font-bold p-8 text-center"><span className="text-orange-600">20 Years of</span> Experience</h1>
                    <p className="text-md text-stone-900 text-center">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                    <div className="flex flex-row justify-center p-8">
                        <div className="flex flex-col justify-center items-center px-16 m-4"><h1 className="text-6xl p-2 font-bold text-blue-800">18</h1><div className="w-40 text-stone-900 tracking-widest font-semibold text-center p-2">Certified Teachers</div></div>
                        <div className="flex flex-col justify-center items-center px-16 m-4"><h1 className="text-6xl p-2 font-bold text-blue-800">351</h1><div className="w-40 text-stone-900 tracking-widest font-semibold text-center p-2">Successful Kids</div></div>
                        <div className="flex flex-col justify-center items-center px-16 m-4"><h1 className="text-6xl p-2 font-bold text-blue-800">564</h1><div className="w-40 text-stone-900 tracking-widest font-semibold text-center p-2">Happy Parents</div></div>
                        <div className="flex flex-col justify-center items-center px-16 m-4"><h1 className="text-6xl p-2 font-bold text-blue-800">300</h1><div className="w-40 text-stone-900 tracking-widest font-semibold text-center p-2">Awards Won</div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Component2;