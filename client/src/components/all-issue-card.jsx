import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { PiCurrencyEth } from "react-icons/pi";
import {ethers} from "ethers"
import {contractAddress,abi} from "../utils/constants"

function AllCard({title,desc,ethAmount,link,id}){

    const[name,setName]=useState("");


    const createContract = () => {    //creating contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(Contract.address);
        return Contract;
    };


    
    function handleClick(){
        window.location.open(link);
    }
    async function handleClickBtn(){
        if(window.ethereum)
        {
            try
            {
                const contract=await createContract();
                const reqIssue = await contract.requestIssue(id, name);
                console.log(reqIssue);
            }
            catch(err)
            {
                console.log(err);
            }
        }
    }
    return (
        <div className="flex flex-col bg-zinc-600 w-96 px-7 py-7 gap-y-3">
            <div className="flex justify-between text-3xl">
                <div>{title}</div>
                <div className="" onClick={handleClick}><FiGithub/></div>
            </div>
            <div className="text-xl"></div>
            <div className="flex flex-col px-2 py-2 gap-y-2 text-xl min-h-32">
                <span>Description</span>
                <div className="max-w-full text-gray-300 text-sm mb-4">{desc}</div>
            </div>
            <div className="flex gap-x-2 text-2xl items-center">
                <PiCurrencyEth/>
                <div>{ethAmount}</div>
            </div>
            <input 
            className="text-2xl"
            placeholder="Github Username"
            type="text"
            onChange={(e) => setName(e.target.value)}></input>
            <button className="text-3xl bg-zinc-400" onClick={handleClickBtn}>Request</button>
        </div>
    );
}
export default AllCard;