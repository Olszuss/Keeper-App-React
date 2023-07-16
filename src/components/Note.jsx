import React, { useState } from "react";


function Note(props){


const [pass, setPass] = useState(false)

function isClicked(){
    if (pass){
        setPass(false)
    }else {
        setPass(true)
    }
}


    return (
        <div onClick={isClicked} style={{cursor: "pointer"}} className="note">
            <h1>{props.title}</h1>
            <p style={{textDecoration: pass ? "line-through" : "none"}}>{props.content}</p>
        </div>
    )
}

export default Note;