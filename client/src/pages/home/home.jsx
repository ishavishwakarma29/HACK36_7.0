import React, { useEffect, useState, useContext } from "react";
import AllCard from '../../components/all-issue-card'
import MyCard from "../../components/my-issue-card";
import DoneCard from "../../components/CompleteCard";
import PendingCard from "../../components/pending-issue-card";
import Create from "../../components/createissue";
import { contractAddress,abi } from "../../utils/constants";
import { FaMapSigns } from "react-icons/fa";
import { ethers } from "ethers";
import ThemeSwitch from '../../theme/theme'
import useDarkMode from "../../hooks/darkmode";


function Home(){

    const [colorTheme, setTheme] = useDarkMode();
    const [darkMode, setDarkMode] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };

    const[allIssues, setAllIssues]=useState(true);
    const[myIssues, setMyIssues]=useState(false);
    const[doneIssues, setDoneIssues]=useState(false);
    const[pending, setPending]=useState(false);
    const[create, setCreate]=useState(false);
    const[aboutUs, setAboutUs]=useState(false);
    const[userAddress,setUserAddress]=useState('');


    const [totalIssues,setTotalIssues]=useState([]);
    const [myTotalIssues,setMyTotalIssues]=useState([]);
    const [completedIssues,setCompletedIssues]=useState([]);
    const [myPendingIssues,setPendingIssues]=useState([]);


    
   const createContract = () => {    //creating contract
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(contractAddress,abi,signer);
    return Contract;
  };

    async function getAccountAddress(){
        try {
            if(!window.ethereum) return alert("please install metamask!");
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
            if(accounts.length)
            {
                setUserAddress(accounts[0]);
            }
            else console.log("an error occured");
        } catch (error) {
            console.log(error);
        }
    }
    async function getAllIssues()
    {
        try {
            if (window.ethereum) {
              const contract = createContract();
              const AllIssues = await contract.getOpenIssues();
              setTotalIssues(AllIssues);
            } 
            else 
            {
              console.log("Metamask Not Found");
            }
          } 
          catch (err) 
          {
            console.log(err);
          }
    }

    async function getDoneIssues(){
        try {
            if (window.ethereum) {
                const contract = createContract();
                const DoneIssues = await contract.getClosedIssues();
                // console.log(AllIssues);
                setCompletedIssues(DoneIssues);
                console.log(DoneIssues);
            }
            else {
                console.log("Metamask Not Found");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    async function getPendingIssues(){
        try {
            if (window.ethereum) {
                const contract = createContract();
                const pendingIssues = await contract.getMyTryingIssues();
                console.log(pendingIssues);
                setPendingIssues(pendingIssues);
            }
            else 
            {
                console.log("Metamask Not Found");
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    async function getMyIssues(){
        try {
            if (window.ethereum) {
                const contract = createContract();
                const myIssues = await contract.myIssues();
                // console.log(AllIssues);
                setMyTotalIssues(myIssues);
                console.log(myIssues);
            }
            else {
                console.log("Metamask Not Found");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        if(window.ethereum)
        {
            getAccountAddress();
            getAllIssues();
            getMyIssues();
            getDoneIssues();
            getPendingIssues();

        }
    },[]);

    function handleAllIssues(){
        setAllIssues(true);
        getAllIssues();
        setMyIssues(false);
        setDoneIssues(false);
        setPending(false);
        setCreate(false);
    }

    function handleMyIssues(){
        setMyIssues(true);
        getMyIssues();
        setAllIssues(false);
        setDoneIssues(false);
        setPending(false);
        setCreate(false);
    }

    function handleDoneIssues(){
        setDoneIssues(true);
        getDoneIssues();
        setAllIssues(false);
        setMyIssues(false);
        setPending(false);
        setCreate(false);
    }

    function handlePending(){
        setPending(true);
        getPendingIssues();
        setAllIssues(false);
        setMyIssues(false);
        setDoneIssues(false);
        setCreate(false);
    }

    function handleCreate(){
        setCreate(true);
        setAllIssues(false);
        setMyIssues(false);
        setDoneIssues(false);
        setPending(false);
    }


    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-zinc-900">

            {/* navbar */}
            <div className="w-full text-gray-500 top-0 mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
                <a  href='/' className="flex title-font font-medium items-center text-gray-900 ml-6 mb-4 md:mb-0">
                    <span className="ml-3 text-xl text-white">Githereum</span>
                </a>
                <nav className="flex flex-wrap items-center text-lg justify-center ml-12">
                    <div 
                    onClick={handleAllIssues}
                    className={`mr-5 hover:text-gray-30 ${allIssues?'text-gray-100':''}`}>All Issues</div>
                    <div 
                    onClick={handleMyIssues}
                    className={`mr-5 hover:text-gray-30 ${myIssues?'text-gray-100':''}`}>Issues Posted</div>
                    <div 
                    onClick={handleDoneIssues}
                    className={`mr-5 hover:text-gray-30 ${doneIssues?'text-gray-100':''}`}>Solved Issues</div>
                    <div 
                    onClick={handlePending}
                    className={`mr-5 hover:text-gray-30 ${pending?'text-gray-100':''}`}>Pending Issues</div>
                    <div 
                    onClick={handleCreate}
                    className={`mr-5 hover:text-gray-30 ${create?'text-gray-100':''}`}>Create Issue</div>
                </nav>
                <div className="flex gap-x-5">
                <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded w-[100px] overflow-hidden">
                {userAddress}
                </button>
                </div>
                
            </div>  

            <div className="flex flex-wrap w-full px-16 py-16 gap-16">
            {allIssues && 
            <>  
            {(totalIssues.length === 0)
            ? <div className="w-full mt-16 text-center text-4xl text-slate-300">No Issues Have Been Posted Yet :/</div>
            : totalIssues.map((issue)=>{
                    return(
                        <AllCard id={JSON.parse(issue[0])} username={issue[1]} title={issue[3]} desc={issue[2]} link={`https://github.com/${issue[1]}/pythonPractice`} ethAmount={JSON.parse(issue[6])} status={issue[5]}/>
                    )
                })}
            </>
            }

            {myIssues &&
            <>
            {myTotalIssues.length === 0
            ? <div className="w-full mt-16 text-center text-4xl text-slate-300">You Have Not Posted Any Issue :/</div>
            : myTotalIssues.map((issue)=>{
                return(
                    <MyCard id={JSON.parse(issue[0])} username={issue[1]} title={issue[3]} desc={issue[2]} link={`https://github.com/${issue[1]}/pythonPractice`} ethAmount={JSON.parse(issue[6])} status={issue[5]} />
                )})}
            </>
            }

            {doneIssues &&
            <>
            {completedIssues.length === 0
            ? <div className="w-full mt-16 text-center text-4xl text-slate-300">You Have Not Solved Any Issue</div>
            : completedIssues.map((issue)=>{
                return(
                    <DoneCard id={JSON.parse(issue[0])} username={issue[1]} title={issue[3]} desc={issue[2]} link={`https://github.com/${issue[1]}/pythonPractice`} ethAmount={JSON.parse(issue[6])} status={issue[5]} />
                )})}
            </>
            }

            {pending &&
            <>
            {myPendingIssues.length === 0
            ? <div className="w-full mt-16 text-center text-4xl text-slate-300">You Have No Pending Issue!</div>
            : myPendingIssues.map((issue)=>{
                return(
                    <PendingCard title={issue[3]} desc={issue[2]} link={issue[1]} id={JSON.parse(issue[0])} ethAmount={JSON.parse(issue[6])} ownername={issue[4]} recieverAddress={userAddress}/>
                )})}
            </>
            }
            </div>
            {create && <Create/>}

            
        </div>
    );
}

export default Home;