import React, { useContext } from "react"
import {Global_Todo_history} from "./data";

export default function History(){
    const todo_history=useContext(Global_Todo_history);
    // let m=0;
    // console.log(todo_history,m+1);
    return(
<div className="text-3xl">
{todo_history}
SDP
</div>
    )
}