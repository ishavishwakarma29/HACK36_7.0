import React, { useState } from "react";
import Create from './createissue';
function Userguide (){

    const [create,setCreate]=useState(true);

    function handleCreate(){
        setCreate(true);
    }

    function handleSolve(){
        setCreate(false);
    }

    return (
        <div>
            <div>User Guide</div>
            <div>
                <span
                className=""
                onClick={handleCreate}>Create Your Github Issue</span>
                <span
                className=""
                onClick={handleSolve}>Solve Any Github Issue</span>
            </div>
            {create && <Create/>}
        </div>
    )
}
export default Userguide;