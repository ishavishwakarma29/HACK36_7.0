import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { PiCurrencyEth } from "react-icons/pi";
import { contractAddress,abi } from "../utils/constants";
import { ethers } from "ethers";
import { Octokit, App } from "octokit";
import {BigNumber} from "ethers"
// import fetch from 'node-fetch'


function PendingCard({title,desc,link,ethAmount,ownername,recieverAddress,id}){
    const[pullNum,setPullNum]=useState();
    const [isChecked,setIsChecked]=useState(false);



    const createContract = () => {    //creating contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(contractAddress, abi, signer);
        console.log(Contract.address);
        return Contract;
    };

    function handleClick()
    {
        window.location.replace(link);
    }
    async function checkClaim()
    {
        const octokit = new Octokit({
            auth: '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'
          })
        const res = await octokit.request(`GET /repos/${ownername}/pythonPractice/pulls/${pullNum}/merge`, {
            owner: ownername,
            repo: "pythonPractice",
            pull_number: pullNum,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
          })
        console.log(res);
        if(res.status=="204")
        {
            setIsChecked(true);

            return true;
        }
        else
        return false;
    }
    async function pay(){
        if(window.ethereum)
        {
            try{
                console.log("in pay func");
                const contract=createContract();
                // const txRes=await contract.
                const txRes = await contract.withdrawMoney(recieverAddress, ethAmount.toString(),id);
                console.log(txRes);
                if(txRes)
                {
                    alert("Payment Completed!!!!");
                }
                else
                {
                    alert("Payment Failed");
                }
            }
            catch(err){
                console.log(err);
            }
        }
    }
    async function handleClickClaim()
    {
        if(window.ethereum)
        {
            try{
                const contract= createContract();
                const res=await checkClaim();
                if(res==false)
                {
                    alert("invalid pull number");
                }
                else
                {
                    pay();
                }

                
            }
            catch(err)
            {
                console.log(err);
            }
        }

    }
    return (
        <div className="flex flex-col bg-zinc-600 w-2/5 px-7 py-7 gap-y-3">
            <div className="flex justify-between text-3xl">
                <div>{title}</div>
                <div className="" onClick={handleClick}><FiGithub/></div>
            </div>
            <div className="text-xl">{ownername}</div>
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
            placeholder="Pull Request No."
            type="number"
            onChange={(e) => setPullNum(e.target.value)}
            ></input>
            <button
            className="text-3xl bg-zinc-400" onClick={handleClickClaim}>Claim</button>
        </div>
    );
}
export default PendingCard;