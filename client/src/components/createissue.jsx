/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";

function Create(){

    const[title, setTitle]=useState();
    const[gname, setGname]=useState();
    const[repolink, setLink]=useState();
    const[desc, setDesc]=useState();

    return (
    <div className="flex flex-col w-2/5 bg-slate-500">
        <span className="text-3xl">Create Your GitHub Issue</span>
        <input 
        type="text" 
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}></input>
        <input 
        type="text" 
        placeholder="Github Username"
        onChange={(e) => setGname(e.target.value)}></input>
        <input 
        type="text" 
        placeholder="Repo Link"
        onChange={(e) => setLink(e.target.value)}></input>
        <input 
        type="textarea"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}></input>
        <button>Submit Issue</button>
    </div>)
}
export default Create;