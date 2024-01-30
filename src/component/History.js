import React, { useContext } from "react"
import { Global_Todo_history } from "./data";

export default function History() {
    const todo_history = useContext(Global_Todo_history);

    return (
        <div className="text-3xl">
            {todo_history}
            SDP
        </div>
    )
}
// This is Processing part 