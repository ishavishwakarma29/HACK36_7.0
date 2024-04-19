import React from "react";
import { FiGithub } from "react-icons/fi";
import { PiCurrencyEth } from "react-icons/pi";

function AllCard(){
    return (
        <div className="flex flex-col bg-zinc-600 w-2/5 px-7 py-7 gap-y-3">
            <div className="flex justify-between text-3xl">
                <div>Issue 1</div>
                <div className=""><FiGithub/></div>
            </div>
            <div className="text-xl">@issuer_username</div>
            <div className="flex flex-col px-2 py-2 gap-y-2 text-xl min-h-32">
                <span>Description</span>
                <div className="max-w-full text-gray-300 text-sm mb-4">ksbbfikaerhvoierlvernveknerknkkjsdbuskvkj</div>
            </div>
            <div className="flex gap-x-2 text-2xl items-center">
                <PiCurrencyEth/>
                <div>0.00023</div>
            </div>
            <input 
            className="text-2xl"
            placeholder="Github Username"></input>
            <button
            className="text-3xl bg-zinc-400">Request</button>
        </div>
    );
}
export default AllCard;