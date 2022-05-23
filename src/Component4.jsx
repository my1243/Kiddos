import React from "react";
import { Card5 } from "./Teacher";
import { Card5_data } from "./Data";

const Component4 = () => {
    return (
        <>
            <div className="p-32">
                <h1 className="text-center text-5xl pb-8 font-bold"><span className="text-violet-600">Our</span> <span className="text-amber-500">Pricing</span></h1>
                <p className="text-center px-64 pb-16 text-lg text-slate-600">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                <div className="flex justify-center">
                    {
                        Card5_data.map((val) => {
                            return(
                                <Card5 
                                imgsrc={val.imgsrc}
                                title={val.Title}
                                content={val.content}
                                color={val.col}
                                price={val.price}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Component4;
