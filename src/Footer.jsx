import React from "react";

const Footer = () => {
    return(
        <>
            <div className="flex justify-center p-16 text-white bg-neutral-800">
                <div className="w-1/4">
                    <h1 className="text-2xl pb-4">Have a Questions?</h1>
                    <div className="flex py-4 pr-2 w-full items-center">
                        <img className="w-8" src="https://img.icons8.com/small/48/000000/region-code.png"/>
                        <div className="m-2">203 Fake St. Mountain View, San Francisco, California, USA</div>
                    </div>
                    <div className="flex py-4 pr-2 items-center">
                        <img className="w-8" src="https://img.icons8.com/small/48/000000/phone.png"/>
                        <div className="m-2">+2 392 3292 210</div>
                    </div>
                    <div className="flex py-4 pr-2 items-center">
                        <img className="w-8" src="https://img.icons8.com/small/48/000000/open-envelope.png"/>
                        <div className="m-2">info@yourdomain.com</div>
                    </div>
                </div>
                <div className="w-1/4">
                    <h1 className="text-2xl pb-4">Recent Blog</h1>
                    <div className="flex">
                        <div className="w-24 h-20 p-2"><img className="w-full h-full object-cover" src="blog1.jpg"/></div>
                        <div className="py-2">
                            <h2>Even the all-powerful Pointing has no control about</h2>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-24 h-20 p-2"><img className="w-full h-full object-cover" src="blog2.jpg"/></div>
                        <div className="py-2">
                            <h2>Even the all-powerful Pointing has no control about</h2>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 px-8">
                    <h1 className="text-2xl pb-4">Links</h1>
                    <a className="block" href="#"><img className="inline pr-2" src="https://img.icons8.com/small/24/000000/arrow.png"/>Home</a>
                    <a className="block" href="#"><img className="inline pr-2" src="https://img.icons8.com/small/24/000000/arrow.png"/>About</a>
                    <a className="block" href="#"><img className="inline pr-2" src="https://img.icons8.com/small/24/000000/arrow.png"/>Services</a>
                    <a className="block" href="#"><img className="inline pr-2" src="https://img.icons8.com/small/24/000000/arrow.png"/>Departments</a>
                    <a className="block" href="#"><img className="inline pr-2" src="https://img.icons8.com/small/24/000000/arrow.png"/>Contact</a>
                </div>
                <div className="w-1/4">
                    <h1 className="text-2xl pb-4">Subscribe Us!</h1>
                    <form className="flex flex-col">
                        <input className="bg-neutral-700 mb-4 py-4 px-2 text-center text-lg" type={'text'} placeholder="Enter email address"/>
                        <button className="w-full py-4 px-2 text-center text-lg bg-purple-700">Subscribe</button>
                    </form>
                    <h1 className="pt-12 text-2xl">Connect With Us</h1>
                    <div className="py-4">
                        <button className="rounded-full w-10 h-10 p-2 mx-2 bg-neutral-700"><img className="w-full h-full" src="https://img.icons8.com/ios/50/000000/twitter--v1.png"/></button>
                        <button className="rounded-full w-10 h-10 p-2 mx-2 bg-neutral-700"><img className="w-full h-full" src="https://img.icons8.com/ios/50/000000/facebook-new.png"/></button>
                        <button className="rounded-full w-10 h-10 p-2 mx-2 bg-neutral-700"><img className="w-full h-full" src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;