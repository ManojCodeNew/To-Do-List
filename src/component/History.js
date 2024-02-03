import React from "react"
import Context from "../Context/Context";
import { Global_data } from "../Context/Context"
import { useContext } from "react";


export default function History() {
    // Storing data using useContext
    const todo_history = useContext(Global_data)
    console.log(todo_history.data);
    return (
        <div className="mt-5">
            {/* For using one by one display */}
            {todo_history.data[0].map((item, key) =>
                <div className="text-3xl border border-solid border-black p-1 mt-5 rounded-lg hover:bg-gray-400 cursor-pointer" key={key}>
                <h3 className="hover:font-semibold">{item}</h3> 
                </div>
            )}

        </div>
    )
}
// This is Processing part
// History.js
