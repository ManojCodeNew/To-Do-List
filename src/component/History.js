import React from "react"
import Context from "../Context/Context";
import { Global_data } from "../Context/Context"
import { useContext } from "react";


export default function History() {
    // Storing data using useContext
    const todo_history = useContext(Global_data)
    const History_Container=[todo_history.data];
    console.log(History_Container);
    const Click_handle=(e)=>{
    const Clicked_item_location=e.target.value;
    
    // return d
    }
    return (
        <div className="mt-5">
            {/* For using one by one display */}
            {History_Container[0][0].map((item, key) =>
                <div className="text-3xl border border-solid border-black p-1 mt-5 rounded-lg hover:bg-gray-400 cursor-pointer "  >
                <button className="hover:font-semibold" onClick={Click_handle} value={key} >{item} </button> 
                <h1>{key}</h1>
                </div>
            )}
        </div>
    )
}
// This is Processing part
// History.js
