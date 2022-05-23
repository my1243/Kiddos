import React from "react";
import { Card4 } from "./Teacher";
import { Card4_data } from "./Data";

const Component3 = () =>{
    return (
        <>
            <div className="p-32">
                <h1 className="text-center text-5xl pb-8 font-bold"><span className="text-violet-600">What Parents</span> <span className="text-amber-500">Says About Us</span></h1>
                <p className="text-center px-64 pb-16 text-lg text-slate-600">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                <div className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-inner relative w-full overflow-hidden">
                    {
                        Card4_data.map((val) =>{
                            return(
                                <Card4 
                                imgsrc={val.imgsrc}
                                name={val.name}
                                relation={val.relation}
                                content={val.content}
                                />
                            )
                        })
                    }
                    </div>
                </div>

                {/* <Card4/> */}
            </div>
            
        </>
    );
}

export default Component3;