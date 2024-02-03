import React from "react"
import Context from "../Context/Context";
import {Global_data} from "../Context/Context"
import { useContext } from "react";


export default function History() {
    // Storing data using useContext
const todo_history=useContext(Global_data)
    
    return (
        <div className="text-3xl">
            ...........................SDP{todo_history.history}
        </div>
    )
}
// This is Processing part 
// History.js
