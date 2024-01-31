import React, { useContext } from "react"
import { Global_Todo_history } from "./data.js";

export default function History({data}) {
    // Storing data using useContext
    const todo_history = useContext(Global_Todo_history);
    // const data=todo_history.props.children;
console.log("data",todo_history);
    return (
        <div className="text-3xl">
            {data}
            SDP
        </div>
    )
}
// This is Processing part 