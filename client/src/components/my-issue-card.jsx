import React from "react";
import { FiGithub } from "react-icons/fi";
import { PiCurrencyEth } from "react-icons/pi";

function MyCard(){
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
            <div className="h-1 w-full bg-black"></div>
            <div className="flex text-3xl text-center">issue status</div>
            {/* add icons corresponding to status if time permits */}
        </div>
    );
}
export default MyCard;