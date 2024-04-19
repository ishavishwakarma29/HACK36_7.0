import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { AiFillPlayCircle } from "react-icons/ai";
import './nav.css'

function Navbar(){
    return (
        <div className="w-full flex items-center justify-between px-2 py-1 bg-zinc-900">
            <div className="flex-initial">
                <div className="flex flex-row items-center text-white text-2xl ml-12 font-righteous">
                    <FaGithubAlt className="mt-2 mr-2" />
                    Githereum
                </div>
            </div>
            <div className="text-white hidden md:flex flex-row items-center">

                {/* after connect */}
                {/* <div className="text-white text-base border-2 border-white rounded-md p-2 flex flex-row items-center">
                    <img  alt="metamask" className="w-6 h-6 mr-2" />
                    address
                </div> */}

                {/* before connect */}
                <div className="flex flex-row justify-center items-center mx-5 my-2 p-3">User Guide</div>
                <button
                    type="button"
                    className="flex flex-row justify-center items-center mx-5 my-2 p-3 rounded-md cursor-pointer"
                >
                    <AiFillPlayCircle className="text-white mr-2" />
                    <p className="text-white text-base font-semibold">Connect Wallet</p>
                </button>
                <button className="flex flex-row justify-center items-center mx-5 my-2 p-3 rounded-md cursor-pointer">dark mode</button>
            </div>
        </div>
    );
}
export default Navbar;
