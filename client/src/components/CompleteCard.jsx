import React from "react";
import { FiGithub } from "react-icons/fi";
import { PiCurrencyEth } from "react-icons/pi";

function DoneCard({title, username, desc, ethAmount, link}){
    function handleClick() {
        window.location.open(link);
    }
    return (
        <div className="flex flex-col bg-zinc-600 w-2/5 px-7 py-7 gap-y-3">
            <div className="flex justify-between text-3xl">
                <div>{title}</div>
                <div className="" onClick={handleClick}><FiGithub/></div>
            </div>
            <div className="text-xl">{username}</div>
            <div className="flex flex-col px-2 py-2 gap-y-2 text-xl min-h-32">
                <span>Description</span>
                <div className="max-w-full text-gray-300 text-sm mb-4">{desc}</div>
            </div>
            <div className="flex gap-x-2 text-2xl items-center">
                <PiCurrencyEth/>
                <div>{ethAmount}</div>
            </div>
            <div className="h-1 w-full bg-black"></div>
            <div className="text-3xl">Payment Requested</div>
            {/* add icons */}
        </div>
    );
}
export default DoneCard;