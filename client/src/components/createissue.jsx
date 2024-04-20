/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";

function Create(){

    const[title, setTitle]=useState();
    const[gname, setGname]=useState();
    const[repolink, setLink]=useState();
    const[desc, setDesc]=useState();

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
        placeholder="Github Username . . ."
        onChange={(e) => setGname(e.target.value)}></input>
        <input 
        className="w-4/5 rounded-lg focus:outline-none cursor-auto bg-zinc-500 text-white font-semibold placeholder:font-semibold placeholder:text-slate-200 px-3 py-2"
        type="text" 
        placeholder="Repository URL . . ."
        onChange={(e) => setLink(e.target.value)}></input>
        <input 
        className="w-4/5 max-h-24 rounded-lg focus:outline-none cursor-auto bg-zinc-500 text-white font-semibold placeholder:font-semibold placeholder:text-slate-200 px-3 py-2"
        type="textarea"
        placeholder="Description . . ."
        onChange={(e) => setDesc(e.target.value)}></input>
        <button className="px-9 py-1 text-zinc-900 text-xl font-bold bg-zinc-200 rounded-lg hover:shadow-slate-400">Submit Issue</button>
    </div>)
}
export default Create;