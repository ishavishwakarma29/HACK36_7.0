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


    const [totalIssues,setTotalIssues]=useState([]);
    const [myTotalIssues,setMyTotalIssues]=useState([]);
    const[completedIssues,setCompletedIssues]=useState([]);
    const [myPendingIssues,setPendingIssues]=useState([]);


    
   const createContract = () => {    //creating contract
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(contractAddress,abi,signer);
    return Contract;
  };

    async function getAllIssues()
    {
        try {
            if (window.ethereum) {
              const contract = createContract();
              const AllIssues = await contract.getOpenIssues();
              console.log(AllIssues);
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

    useEffect(()=>{
        if(window.ethereum)
        {

            getAllIssues();
            // getMyIssues();
            // getDoneIssues();
            // getPendingIssues();

        }
    },[totalIssues,myTotalIssues,completedIssues,myPendingIssues]);

    function handleAllIssues(){
        setAllIssues(true);
        setMyIssues(false);
        setDoneIssues(false);
        setPending(false);
        setCreate(false);
    }

    function handleMyIssues(){
        setMyIssues(true);
        setAllIssues(false);
        setDoneIssues(false);
        setPending(false);
        setCreate(false);
    }

    function handleDoneIssues(){
        setDoneIssues(true);
        setAllIssues(false);
        setMyIssues(false);
        setPending(false);
        setCreate(false);
    }

    function handlePending(){
        setPending(true);
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
            <div className="w-full text-gray-500 top-0 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a  href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl text-white">Githereum</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
                    <div 
                    onClick={handleAllIssues}
                    className={`mr-5 hover:text-gray-30 ${allIssues?'text-gray-100':''}`}>All Issues</div>
                    <div 
                    onClick={handleMyIssues}
                    className={`mr-5 hover:text-gray-30 ${myIssues?'text-gray-100':''}`}>My Issues</div>
                    <div 
                    onClick={handleDoneIssues}
                    className={`mr-5 hover:text-gray-30 ${doneIssues?'text-gray-100':''}`}>Completed Issues</div>
                    <div 
                    onClick={handlePending}
                    className={`mr-5 hover:text-gray-30 ${pending?'text-gray-100':''}`}>Pending Issues</div>
                    <div 
                    onClick={handleCreate}
                    className={`mr-5 hover:text-gray-30 ${create?'text-gray-100':''}`}>Create Issue</div>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                address
                </button>
                <ThemeSwitch checked={darkMode} onChange={toggleDarkMode}/>
            </div>  

            <div className="flex flex-wrap w-full px-16 py-16 gap-16">

            {allIssues && 
            // map over data\
            <>
                {totalIssues.map((issue)=>{
                    return(
                        <AllCard issue={issue}/>
                    )
                })}
            </>
            }

            {myIssues && 
            <MyCard/>}

            {doneIssues &&
            <DoneCard/>}

            {pending &&
            <PendingCard/>}

            {create && 
            <Create/>}

            </div>
        </div>
    );
}

export default Home;