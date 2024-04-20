import React, { useState } from "react";

function Nav2(){

    const[allIssues, setAllIssues]=useState(true);
    const[myIssues, setMyIssues]=useState(false);
    const[doneIssues, setDoneIssues]=useState(false);
    const[pending, setPending]=useState(false);
    const[aboutUs, setAboutUs]=useState(false);

    function handleAllIssues(){
        setAllIssues(true);
    }

    function handleMyIssues(){
        setMyIssues(true);
    }

    function handleDoneIssues(){
        setDoneIssues(true);
    }

    function handlePending(){
        setPending(true);
    }

    function handleCreate(){
        setPending(true);
    }
    
    return (
        <header className="w-full text-gray-600 body-font top-0">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a  href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 text-xl text-white">Githereum</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <div 
                onClick={handleAllIssues}
                className="mr-5 hover:text-gray-900">All Issues</div>
                <div 
                onClick={handleMyIssues}
                className="mr-5 hover:text-gray-900">My Issues</div>
                <div 
                onClick={handleDoneIssues}
                className="mr-5 hover:text-gray-900">Completed Issues</div>
                <div 
                onClick={handlePending}
                className="mr-5 hover:text-gray-900">Pending Issues</div>
                <div 
                onClick={handleCreate}
                className="mr-5 hover:text-gray-900">Create Issue</div>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            address
            </button>
      </div>
    </header>
    )
}
export default Nav2;