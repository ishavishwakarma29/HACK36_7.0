/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react";
import { contractAddress,abi } from "../utils/constants";
import { ethers } from "ethers";

function Create(){

    const[title, setTitle]=useState("");
    const[userName, setUserName]=useState("");
    const[repolink, setRepoLink]=useState("");
    const[desc, setDesc]=useState("");
    const[ethAmount,setEthAmount]=useState();

    const createContract = () => {    //creating contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(contractAddress,abi,signer);
        return Contract;
      };


    async function handleSubmit(){
        const contract=createContract();
        const txres=await contract.addIssue(repolink,desc,title,ethAmount);
        console.log(ethAmount);
    }
    useEffect(()=>{
        if(window.ethereum)
        {
            const contract=createContract();
        }
    },[])

    return (
    <div className="flex flex-col items-center py-6 rounded-2xl  w-3/6 bg-zinc-700 text-white gap-y-6 ">
        <span className="text-3xl">Create Your GitHub Issue</span>
        <input 
        className="w-4/5 rounded-lg focus:outline-none cursor-auto bg-zinc-500 text-white font-semibold placeholder:font-semibold placeholder:text-slate-200 px-3 py-2"
        type="text" 
        placeholder="Issue Title . . ."
        onChange={(e) => setTitle(e.target.value)}></input>
        <input 
        className="w-4/5 rounded-lg focus:outline-none cursor-auto bg-zinc-500 text-white font-semibold placeholder:font-semibold placeholder:text-slate-200 px-3 py-2"
        type="text" 
        placeholder="Github Username"
        onChange={(e) => setUserName(e.target.value)}></input>
        <input 
        className="w-4/5 rounded-lg focus:outline-none cursor-auto bg-zinc-500 text-white font-semibold placeholder:font-semibold placeholder:text-slate-200 px-3 py-2"
        type="text" 
        placeholder="Repo Link"
        onChange={(e) => setRepoLink(e.target.value)}></input>
        <input 
        className="w-4/5 max-h-24 rounded-lg focus:outline-none cursor-auto bg-zinc-500 text-white font-semibold placeholder:font-semibold placeholder:text-slate-200 px-3 py-2"
        type="textarea"
        placeholder="Description . . ."
        onChange={(e) => setDesc(e.target.value)}></input>
        <input 
        type="number"
        placeholder="ETH Amount"
        onChange={(e) => setDesc(e.target.value)}></input>
        <button onSubmit={handleSubmit}>Submit Issue</button>
    </div>)
}
export default Create;