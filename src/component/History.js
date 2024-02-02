import React, { useContext } from "react"
import { Global_Todo_history } from "./data.js";

export default function History(props) {
    // Storing data using useContext

    const todo_history = useContext(Global_Todo_history);
    console.log("history.js",todo_history);
    // const data=todo_history.props.children;
console.log("data",props);
    return (
        <div className="text-3xl">
            SDP
        </div>
    )
}
// This is Processing part 