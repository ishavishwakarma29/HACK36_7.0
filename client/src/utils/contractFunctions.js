import { contractAddress, abi } from "./constants";
import { ethers } from "ethers"; 

async function createContract() {
    if(typeof window.ethereum != "undefined"){
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);
            await contract.deployed();
            console.log(`Deployed contract at ${contract.address}`);
            return contract;
        } catch (error) {
            return error;
        }
    }else{
        return alert("please install metamask!!");
    }
}

async function getIssueCount(){
    const contract = createContract();
    const issueCount = await contract.getIssueCount();
    console.log(issueCount.toString());
  }