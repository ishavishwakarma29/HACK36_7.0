import React, { useEffect, useState, createContext, useContext } from "react";
import Userguide from '../../components/userguide';
import About from '../../components/aboutus';
import { ethers } from "ethers";
import { contractAddress, abi } from "../../utils/constants";

import Navbar from "./navbar";

const Main = ({setIsConnected}) => {
  

  async function createContract(){
    if (typeof window.ethereum != "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        await contract.deployed();
        console.log(`Deployed contract at ${contract.address}`);
        
        return contract;
      }
      catch (error) 
      {
        return error;
      }
    } else {
      return alert("please install metamask!!");
    }
  }





  async function handleClick() {
    try {
      const res = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected");
      console.log(res);
      if (res) {
        setIsConnected(true);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }

  return (
    <>
    <Navbar/>
    <div className="flex flex-row items-center justify-center md:justify-evenly h-auto md:min-h-screen my-5 md:my-0 px-5 md:px-10 bg-zinc-900">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
       <span className="text-white text-6xl font-bold mb-5 md:mb-8">Githereum</span>
        <span className="text-white text-3xl md:text-4xl font-bold mb-5 md:mb-8">
            Solve GitHub issues, get rewards.
            <br/>
            Code, Conquer, Cash In!</span>
        <button onClick={handleClick} className="bg-cyan-400 text-black py-3 px-6 hover:bg-transparent hover:text-cyan-400 border border-cyan-400 rounded-md">
        Connect Wallet
        </button>

      </div>
      <div className="w-1/2 h-10 bg-slate-500">
        {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        {/* image */}
      </div>
      {/* <Userguide/> */}
      {/* <About/> */}
      
    </div>
    </>
  );
};

export default Main;
