import React from "react";
import { Card6 } from "./Teacher";
import { Card6_data } from "./Data";

const Component5 = () => {
    return (
        <>
            <div className="px-32 pb-16">
                <h1 className="text-center text-5xl pb-8 font-bold"><span className="text-violet-600">Recent</span> <span className="text-amber-500">Blog</span></h1>
                <p className="text-center px-64 pb-16 text-lg text-slate-600">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                <div className="flex justify-center">
                    {
                        Card6_data.map((val) => {
                            return(
                                <Card6 
                                imgsrc={val.imgsrc}
                                title={val.title}
                                content={val.content}
                                date= {val.date}
                                com_count={val.com_count}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Component5;
