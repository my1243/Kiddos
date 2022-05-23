import React from "react";
import Teacher from "./Teacher";
import { Teacher_data } from "./Data";

const Teacher_comp = () =>{
    return(
        <>
            <div className="p-32">
                <h1 className="text-center text-5xl pb-8 font-bold"><span className="text-violet-600">Certified</span> <span className="text-amber-500">Teachers</span></h1>
                <p className="text-center px-64 text-lg text-slate-600">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
                <div className="flex p-6 justify-center">
                    {
                        Teacher_data.map((val) => {
                            return(
                                <Teacher 
                                imgsrc={val.imgsrc}
                                name={val.Name}
                                desig={val.designation}
                                about={val.about}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Teacher_comp;